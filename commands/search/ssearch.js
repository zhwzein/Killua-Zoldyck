let { fetchUrl } = require("../../lib/Function")
let { delay } = require("@adiwajshing/baileys")

module.exports = {
    name: "ssearch",
    alias: ["stcsearch","stickersearch"],
    use: "<query>",
    desc: "Search WhatsApp Sticker",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { command, text, prefix }) => {
        if (!text) return m.reply(`Example : ${prefix + command} anime`)
        let fetch = await fetchUrl(global.api("zenz", "/searching/stickersearch", { query: text }, "apikey"))
        for (let url of fetch.result) {
            await delay(1000)
            killua.sendFile(m.from, url, "", m, { asSticker: true })
        }
    },
    isQuery: true
}