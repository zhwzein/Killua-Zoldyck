const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebaklirik",
    alias: ["tlirik"],
    desc: "Entertaiment Tebak Lirik",
    type: "entertainment",
    start: async(killua, m) => {
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/tebaklirik", {}, "apikey"))
        let result = await fetch.result
        killua.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 30s`, m).then(() => {
            tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
            delete tebaklirik[m.sender.split('@')[0]]
        }
    }
}