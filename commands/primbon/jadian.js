const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadian",
    alias: ["artijadian"],
    use: "<query>",
    desc: "Cek Arti Jadian",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/jadian/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Arti Jadian :\n\n`
        let i = fetch.result
        caption += `⭔ Catatan : ${i.message}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}