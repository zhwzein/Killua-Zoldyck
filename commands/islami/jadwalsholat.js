const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadwalsholat",
    alias: ["sholat"],
    desc: "Get Detail Jadwal Sholat With City",
    type: "islami",
    example: "Example : %prefix%command <city>\n%prefix%command Blitar",
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/islami/jadwalshalat", { kota: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `Jadwal Sholat Kota : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            teks += `⭔ Tanggal : ${i.tanggal}\n`
            teks += `⭔ Subuh : ${i.shubuh}\n`
            teks += `⭔ Duha : ${i.duha}\n`
            teks += `⭔ Dzuhur : ${i.dzuhur}\n`
            teks += `⭔ Ashar : ${i.ashar}\n`
            teks += `⭔ Maghrib : ${i.maghrib}\n`
            teks += `⭔ Isya : ${i.isya}\n\n`
        }
        killua.sendText(m.from, teks, m)
    }
}