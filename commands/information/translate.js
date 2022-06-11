const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "translate",
    alias: ["tr","trans"],
    use: "<query>",
    desc: "Text Translator",
    type: "information",
    example: `%prefix%command en|query`,
    start: async(killua, m, { text, prefix, command }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} en|query`)
        let [a, b] = text.split`|`
        let fetch = await fetchUrl(global.api("zenz", "/information/translate/" + a, { query: b }, "apikey"))
        let caption = `Text Translator :\n\n`
        let i = fetch.result
        caption += `⭔ To ${a} : ${i}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}