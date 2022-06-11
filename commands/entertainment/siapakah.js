const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "siapakah",
    alias: ["siapakahaku"],
    desc: "Entertaiment Siapakah Aku",
    type: "entertainment",
    start: async(killua, m) => {
        if (siapakah.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/siapakah", {}, "apikey"))
        let result = await fetch.result
        killua.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 30s`, m).then(() => {
            siapakah[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (siapakah.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${siapakah[m.sender.split('@')[0]]}`, m)
            delete siapakah[m.sender.split('@')[0]]
        }
    }
}