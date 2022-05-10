const { fetchUrl } = require("../../lib/Function")


module.exports = {
    name: "family100",
    alias: ["fam100"],
    desc: "Entertaiment Fiture Family100",
    type: "entertainment",
    start: async(killua, m) => {
        let family100 = global.db.game.family100
        let id = "game_" + m.from
        if (id in family100) {
            killua.sendMessage(m.from, "There are still unfinished Siapakah Aku sessions", { quoted: game[id].msg })
            throw false
        }
        let res = await fetchUrl(global.api("zenz", "/api/family100", {}, "apikey"))
        let json = await res.result
        let caption = `
*Question :* ${json.soal}

There is *${json.jawaban.length}* answers${json.jawaban.find(v => v.includes(' ')) ? `
(some answers have spaces)
`: ''}
        `.trim()
        family100[id] = {
            id,
            msg: await m.reply(caption),
            ...json,
            terjawab: Array.from(json.jawaban, () => false),
            winScore: 500
        }
    }
}