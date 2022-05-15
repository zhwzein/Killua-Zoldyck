const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadwalsholat",
    alias: ["sholat"],
    use: "<query>",
    desc: "Get Detail Jadwal Sholat With City",
    type: "islami",
    example: "%prefix%command Jakarta-Selatan",
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/islami/jadwalshalat", { kota: text }, "apikey"))
        let i = fetch.result
        let teks = `Jadwal Sholat Kota : ${toUpper(text)}\n\n`
        teks += `⭔ Tanggal : ${i.tanggal}\n`
        teks += `⭔ Subuh : ${i.shubuh}\n`
        teks += `⭔ Duha : ${i.duha}\n`
        teks += `⭔ Dzuhur : ${i.dzuhur}\n`
        teks += `⭔ Ashar : ${i.ashar}\n`
        teks += `⭔ Maghrib : ${i.maghrib}\n`
        teks += `⭔ Isya : ${i.isya}`
        killua.sendText(m.from, teks, m)
    },
    isQuery: true
}