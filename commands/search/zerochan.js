let { fetchBuffer, fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "zerochan",
    alias: ["zchan"],
    use: "<query>",
    desc: "Search Image From Zerochan",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { text, command, toUpper }) => {
        if (!text) return m.reply(`Example : ${prefix + command} query`)
        let fetch = await fetchUrl(global.api("zenz", "/searching/zerochan", { query: text }, "apikey"))
        let random = fetch.result[Math.floor(Math.random() * fetch.result.length)]
        let buttons = [
            {buttonId: `zerochan ${text}`, buttonText: { displayText: 'Next Image'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: "https://external-content.duckduckgo.com/iu/?u=" + random },
            caption: `Search Zerochan Image Query : ${toUpper(text)}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}