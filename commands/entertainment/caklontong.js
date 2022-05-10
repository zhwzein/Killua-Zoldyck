const { fetchUrl } = require("../../lib/Function")

let timeout = 120000
let poin = 4999

module.exports = {
    name: "caklontong",
    alias: ["clontong"],
    desc: "Entertaiment Fiture Cak Lontong",
    type: "entertainment",
    start: async(hisoka, m) => {
        let game = global.db.game.caklontong
        let id = "game_" + m.from
        if (id in game) return hisoka.sendMessage(m.from, "There are still unfinished cak lontong sessions", { quoted: game[id][0] })
        let res = await fetchUrl(global.api("zenz", "/api/caklontong", {}, "apikey"))
        let json = await res.result
        let caption = `
*Question :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second(s)*
        `.trim()
        game[id] = [
            await m.reply(caption),
            json, poin,
            setTimeout(async () => {
                if (game[id]) await m.reply(`Time has run out!\nthe answer is *${json.jawaban}*\n${json.deskripsi}`)
                delete game[id]
            }, timeout)
        ]
    }
}