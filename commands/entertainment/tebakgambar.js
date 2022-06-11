const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebakgambar",
    alias: ["tgambar"],
    desc: "Entertaiment Tebak Gambar",
    type: "entertainment",
    start: async(killua, m) => {
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/tebakgambar", {}, "apikey"))
        let result = await fetch.result
        killua.sendFile(m.from, result.img, "", m, { caption: `Silahkan Jawab Pertanyaan Berikut\n\nDeskripsi: ${result.deskripsi}\n\nWaktu : 30s`}).then(() => {
            tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
            delete tebakgambar[m.sender.split('@')[0]]
        }
    }
}