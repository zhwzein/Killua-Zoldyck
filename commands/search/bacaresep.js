const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "bacaresep",
    alias: ["resep"],
    use: "<query>",
    desc: "Cari dan Baca Resep Makanan",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/bacaresep", { query: text }, "apikey"))
        let caption = `Resep : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Judul : ${i.judul}\n`
        caption += `⭔ Waktu Masak : ${i.waktu_masak}\n`
        caption += `⭔ Hasil : ${i.hasil}\n`
        caption += `⭔ Tingkat Kesulitan : ${i.tingkat_kesulitan}\n`
        caption += `⭔ Bahan : ${i.waktu_masak}\n`
        killua.sendFile(m.from, i.thumb, "", m, { caption })
    },
    isQuery: true
}