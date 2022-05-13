const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "translate",
    alias: ["tr","trans"],
    desc: "Text Translator",
    type: "information",
    example: `Example : %prefix%command en halo`,
    exec: async(killua, m, { args, prefix, command }) => {
        let [a, b] = args
        if (!a, !b) return m.reply(`Example : ${prefix + command} en halo`)
        let fetch = await fetchUrl(global.api("zenz", "/api/translate/" + a, { query: b }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Text Translator :\n\n`
        let i = fetch.result
        caption += `⭔ To ${a} : ${i}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}