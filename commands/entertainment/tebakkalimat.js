const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebakkalimat",
    alias: ["tkata"],
    desc: "Entertaiment Tebak Kalimat",
    type: "entertainment",
    start: async(killua, m) => {
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/tebakkalimat", {}, "apikey"))
        let result = await fetch.result
        killua.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 30s`, m).then(() => {
            tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
            delete tebakkalimat[m.sender.split('@')[0]]
        }
    }
}