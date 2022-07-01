const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animeme",
    alias: ["animememe"],
    desc: "Generate Random Anime Meme Image From Apis",
    type: "randomanime",
    example: `%prefix%command <type>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomanime/animeme", {}, "apikey"))
        let buttons = [
            {buttonId: `animeme`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch.result.image },
            caption: fetch.result.caption,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
}