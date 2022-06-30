let { fetchBuffer, fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "pixiv",
    alias: ["pixiv"],
    use: "<query>",
    desc: "Search Image from Pixiv",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { text, toUpper }) => {
        if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/searching/pixiv", { query: text }, "apikey"))
            let random = fetch.result[0]
            let buttons = [
                {buttonId: `pixiv ${text}`, buttonText: { displayText: 'Next Image'}, type: 1 }
            ]
            let buttonMessage = {
                image: { url: "https://external-content.duckduckgo.com/iu/?u=" + random.urls.regular },
                caption: `Search Pixiv Image Query : ${toUpper(text)}`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/searching/pixiv/random", {}, "apikey"))
            let random = fetch.result[0]
            let buttons = [
                {buttonId: `pixiv`, buttonText: { displayText: 'Next Image'}, type: 1 }
            ]
            let buttonMessage = {
                image: { url: "https://external-content.duckduckgo.com/iu/?u=" + random.urls.regular },
                caption: `Search Pixiv Image Random`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
    },
    isQuery: true
}