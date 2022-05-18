let { fetchBuffer, fetchUrl } = require("../../lib/Function")
let { wallpaper } = require("../../lib/Scraper")

module.exports = {
    name: "wallpaper",
    alias: [],
    use: "<query>",
    desc: "Search Wallpaper from https://www.besthdwallpaper.com",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { text, command, toUpper }) => {
        if (!text) return m.reply(`Example : ${prefix + command} killua Zoldyck`)
        let fetch = await wallpaper(text)
        let random = fetch[Math.floor(Math.random() * fetch.length)]
        let buttons = [
            {buttonId: `wallpaper ${text}`, buttonText: { displayText: 'Next Image'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: random.image[0] },
            caption: `Search Wallpaper Query : ${toUpper(text)}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}