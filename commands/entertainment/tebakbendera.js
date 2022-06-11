const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebakbendera",
    alias: ["tbendera"],
    desc: "Entertaiment Tebak Bendera",
    type: "entertainment",
    start: async(killua, m) => {
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/tebakbendera", {}, "apikey"))
        let result = await fetch.result
        killua.sendFile(m.from, result.img, "", m, { caption: `Silahkan Jawab Pertanyaan Berikut\n\nDeskripsi: ${result.flag}\nWaktu : 30s`}).then(() => {
            tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
            console.log("Jawaban: " + result.name)
        })
        await sleep(30000)
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
            delete tebakbendera[m.sender.split('@')[0]]
        }
    }
}