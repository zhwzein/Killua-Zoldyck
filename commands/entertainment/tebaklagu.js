const { fetchUrl } = require("../../lib/Function")


let timeout = 120000
let poin = 4999

module.exports = {
    name: "tebaklagu",
    alias: ["tlagu"],
    desc: "Entertaiment Fiture Tebak Lagu",
    type: "entertainment",
    start: async(hisoka, m) => {
        let game = global.db.game.tebaklagu
        let id = "_game" + m.from
        if (id in game) {
            hisoka.sendMessage(m.from, "There are still unfinished Susun Kata sessions", { quoted: game[id][0] })
            throw false
        }
        let res = await fetchUrl("https://hisoka-morou.netlify.app/assets/database/tebaklagu.json")
        let json = res[Math.floor(Math.random() * res.length)]
        game[id] = [
            await hisoka.sendMessage(m.from, { audio: { url: json.link_song }, mimetype: "audio/mpeg", fileName: "???" }, { quoted: m }),
            json, poin,
            setTimeout(async () => {
                if (game[id]) await m.reply(`Time has run out!\nthe answer is *${json.jawaban}*`)
                delete game[id]
            }, timeout)
        ]
    }
}