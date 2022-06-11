const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "family100",
    alias: ["fam100"],
    desc: "Entertaiment Family100",
    type: "entertainment",
    start: async(killua, m) => {
        if (family100.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/family100", {}, "apikey"))
        let result = await fetch.result
        killua.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal} ?\nPilih Salah Satu Dari ${result.jawaban.length} Jawaban\n\nWaktu : 30s\n`, m).then(() => {
            family100[m.sender.split('@')[0]] = result.jawaban
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (family100.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${family100[m.sender.split('@')[0]]}`, m)
            delete family100[m.sender.split('@')[0]]
        }
    }
}