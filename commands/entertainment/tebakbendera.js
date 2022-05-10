const { fetchUrl } = require("../../lib/Function")


let timeout = 120000
let poin = 4999

module.exports = {
    name: "tebakbendera",
    alias: ["tbendera"],
    desc: "Entertaiment Fiture Tebak Bendera",
    type: "entertainment",
    start: async(killua, m) => {
        let game = global.db.game.tebakbendera
        let id = "game_" + m.from
        if (id in game) {
            killua.sendMessage(m.from, "There are still unfinished Susun Kata sessions", { quoted: game[id][0] })
            throw false
        }
        let res = await fetchUrl(global.api("zenz", "/api/tebakbendera", {}, "apikey"))
        let json = await res.result
        game[id] = [
            await killua.sendFile(m.from, json.img, "", m, { caption: `Answers the following questions\nCode : ${json.flag}\n\nTimeout *${(timeout / 1000).toFixed(2)} second(s)*` }),
            json, poin,
            setTimeout(async () => {
                if (game[id]) await m.reply(`Time has run out!\nthe answer is *${json.name}*`)
                delete game[id]
            }, timeout)
        ]
    }
}