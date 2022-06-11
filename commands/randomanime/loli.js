const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "loli",
    alias: ["lolikuy"],
    use: "<query>",
    desc: "Generate Random loli Image From Apis",
    type: "randomanime",
    example: `%prefix%command <type>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl('https://lolikuy.herokuapp.com/')
        if (text.toLowerCase() === "nsfw") {
            let buttons = [
                {buttonId: `loli nsfw`, buttonText: { displayText: 'Loli NSFW'}, type: 1 },
                {buttonId: `loli sfw`, buttonText: { displayText: 'Loli SFW'}, type: 1 },
                {buttonId: `loli shota`, buttonText: { displayText: 'Random Shota'}, type: 1 },
            ]
            let buttonMessage = {
                image: { url: fetch.nsfwloli },
                caption: `Random Image ${toUpper(text)}`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        } else if (text.toLowerCase() === "sfw") {
            let buttons = [
                {buttonId: `loli nsfw`, buttonText: { displayText: 'Loli NSFW'}, type: 1 },
                {buttonId: `loli sfw`, buttonText: { displayText: 'Loli SFW'}, type: 1 },
                {buttonId: `loli shota`, buttonText: { displayText: 'Random Shota'}, type: 1 },
            ]
            let buttonMessage = {
                image: { url: fetch.sfwloli },
                caption: `Random Image ${toUpper(text)}`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        } else if (text.toLowerCase() === "shota") {
            let buttons = [
                {buttonId: `loli nsfw`, buttonText: { displayText: 'Loli NSFW'}, type: 1 },
                {buttonId: `loli sfw`, buttonText: { displayText: 'Loli SFW'}, type: 1 },
                {buttonId: `loli shota`, buttonText: { displayText: 'Random Shota'}, type: 1 },
            ]
            let buttonMessage = {
                image: { url: fetch.sfwshota },
                caption: `Random Image ${toUpper(text)}`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
        else if (!text) {
            let buttons = [
                {buttonId: `loli nsfw`, buttonText: { displayText: 'Loli NSFW'}, type: 1 },
                {buttonId: `loli sfw`, buttonText: { displayText: 'Loli SFW'}, type: 1 },
                {buttonId: `loli shota`, buttonText: { displayText: 'Random Shota'}, type: 1 },
            ]
            let buttonMessage = {
                image: { url: fetch.sfwloli },
                caption: `Random Image Nsfw Loli`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
    },
}