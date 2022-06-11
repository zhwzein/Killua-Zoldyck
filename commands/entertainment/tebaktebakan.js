const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebaktebakan",
    alias: ["tebakan"],
    desc: "Entertaiment Tebak Tebakan",
    type: "entertainment",
    start: async(killua, m) => {
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/tebaktebakan", {}, "apikey"))
        let result = await fetch.result
        killua.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 30s`, m).then(() => {
            tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
            delete tebaktebakan[m.sender.split('@')[0]]
        }
    }
}