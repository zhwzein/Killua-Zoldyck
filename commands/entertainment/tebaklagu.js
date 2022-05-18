const { fetchUrl, sleep } = require("../../lib/Function")

module.exports = {
    name: "tebaklagu",
    alias: ["tlagu"],
    desc: "Entertaiment Tebak Lagu",
    type: "entertainment",
    start: async(killua, m) => {
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl("https://hisoka-morou.netlify.app/assets/database/tebaklagu.json")
        let result = await fetch[Math.floor(Math.random() * fetch.length)]
        killua.sendMessage(m.from, { audio: { url: result.link_song }, mimetype: "audio/mpeg", fileName: "???" }, { quoted: m }).then(() => {
            tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(30000)
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}`, m)
            delete tebaklagu[m.sender.split('@')[0]]
        }
    }
}