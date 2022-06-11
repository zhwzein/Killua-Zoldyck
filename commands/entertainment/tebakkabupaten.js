const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebakkabupaten",
    alias: ["tkabupaten"],
    desc: "Entertaiment Tebak Kabupaten",
    type: "entertainment",
    start: async(killua, m) => {
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/tebakkabupaten", {}, "apikey"))
        let result = await fetch.result
        killua.sendFile(m.from, result.url, "", m, { caption: `Silahkan Jawab Pertanyaan Berikut\nWaktu : 30s`}).then(() => {
            tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
            console.log("Jawaban: " + result.title)
        })
        await sleep(30000)
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
            delete tebakkabupaten[m.sender.split('@')[0]]
        }
    }
}