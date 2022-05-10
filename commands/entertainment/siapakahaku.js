const { fetchUrl } = require("../../lib/Function")

let timeout = 120000
let poin = 4999

module.exports = {
    name: "siapakahaku",
    alias: ["siapakau"],
    desc: "Entertaiment Fiture Siapakah Aku",
    type: "entertainment",
    start: async(killua, m) => {
        let game = global.db.game.siapakahaku
        let id = "game_" + m.from
        if (id in game) {
            killua.sendMessage(m.from, "There are still unfinished Siapakah Aku sessions", { quoted: game[id][0] })
            throw false
        }
        let res = await fetchUrl(global.api("zenz", "/api/siapakah", {}, "apikey"))
        let json = await res.result
        let caption = `
*Question :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second(s)*
        `.trim()
        game[id] = [
            await m.reply(caption),
            json, poin,
            setTimeout(async () => {
                if (game[id]) await m.reply(`Time has run out!\nthe answer is *${json.jawaban}*`)
                delete game[id]
            }, timeout)
        ]
    }
}