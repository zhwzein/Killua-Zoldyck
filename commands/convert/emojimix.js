const { delay, extractMessageContent } = require("@adiwajshing/baileys")
const { isUrl } = require("../../lib/Function")

module.exports = {
    name: "emojimix",
    alias: ["emojim","mixemoji"],
    desc: "Convert Emoji Mix To Sticker",
    type: "convert",
    example: `Example : %prefix%command 😅|🤔`,
    exec: async(killua, m, { command, prefix, text, quoted, mime }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} 😅|🤔`)
        global.mess("wait", m)
        let a = text.split("|")[0]
        let b = text.split("|")[1]
        killua.sendFile(m.from, global.api("zenz", `/api/emojimix`, {text: a, text2: b}, "apikey"), "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
    },
    isQuery: true
}
