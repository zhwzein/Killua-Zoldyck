const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "haribaik",
    alias: ["haribaik"],
    desc: "Primbon",
    type: "Cek Primbon Hari Baik",
    example: `Example : %prefix%command 11 06 2007`,
    exec: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/api/haribaik/${a}/${b}/${c}`, {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Primbon Hari Baik :\n\n`
        let i = fetch.result
        caption += `⭔ Catatan : ${i.message}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}