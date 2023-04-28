const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nomerhoki",
    alias: ["nomerhoki"],
    use: "<query>",
    desc: "Primbon Nomor Hoki",
    type: "primbon",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/primbon/nomerhoki", { query: text }, "apikey"))
        let caption = `Primbon Nomer Hoki :\n\n`
        let i = fetch.result
        caption += `⭔ Nomer HP : ${i.nomer_hp}\n`
        caption += `⭔ Angka Shuzi : ${i.angka_shuzi}\n`
        caption += `⭔ Energi Positif : \n`
        caption += `   - Kekayaan : ${i.energi_positif.kekayaan}\n`
        caption += `   - Kesehatan : ${i.energi_positif.kesehatan}\n`
        caption += `   - Cinta : ${i.energi_positif.cinta}\n`
        caption += `   - Kestabilan : ${i.energi_positif.kestabilan}\n`
        caption += `   - Persentase : ${i.energi_positif.persentase}\n\n`
        caption += `⭔ Energi Negatif : \n`
        caption += `   - Perselisihan : ${i.energi_negatif.perselisihan}\n`
        caption += `   - Kehilangan : ${i.energi_negatif.kehilangan}\n`
        caption += `   - Malapetaka : ${i.energi_negatif.malapetaka}\n`
        caption += `   - Kehancuran : ${i.energi_negatif.kehancuran}\n`
        caption += `   - Persentase : ${i.energi_negatif.persentase}\n\n`
        caption += `⭔ Catatan : ${i.catatan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}