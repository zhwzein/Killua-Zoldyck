const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "minecraft",
    alias: ["mcraft"],
    desc: "Generate Random Minecraft Image From Apis",
    type: "randomimage",
    example: `%prefix%command <type>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomimage/randomimage", {}, "apikey"))
        let buttons = [
            {buttonId: `minecraft`, buttonText: { displayText: 'NEXT'}, type: 1 }
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