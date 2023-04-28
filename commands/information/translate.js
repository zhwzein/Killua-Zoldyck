const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "translate",
    alias: ["tr","trans"],
    use: "<query>",
    desc: "Text Translator",
    type: "information",
    example: `%prefix%command en|query`,
    start: async(killua, m, { text, prefix, command }) => {
        if (text.includes('|')) {
            let [a, b] = text.split`|`
            let fetch = await fetchUrl(global.api("zenz", "/information/translate/" + a, { query: b }, "apikey"))
            let caption = `Text Translator :\n\n`
            let i = fetch.result
            caption += `⭔ To ${a} : ${i}\n`
            killua.sendText(m.from, caption, m)
        } else if(text) {
            let fetch = await fetchUrl(global.api("zenz", "/information/translate/en", { query: text }, "apikey"))
            let caption = `Text Translator :\n\n`
            let i = fetch.result
            caption += `${i}\n`
            killua.sendText(m.from, caption, m)
        } else {
            if (!m.quoted) return  m.reply(`Reply Message with Caption\n\n1. ${prefix + command}\n2. ${prefix + command} query\n3. ${prefix + command} en|query`)
            let fetch = await fetchUrl(global.api("zenz", "/information/translate/en", { query: m.quoted.msg }, "apikey"))
            let caption = `Text Translator :\n\n`
            let i = fetch.result
            caption += `${i}\n`
            killua.sendText(m.from, caption, m)
        }
    },
}