module.exports = {
    name: "emojimix",
    alias: ["emojimashup"],
    desc: "Convert Emoji Mix To Sticker",
    type: "convert",
    example: "Example : %prefix%command 😅|🤔",
    exec: async(killua, m, { command, prefix, text }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} 😅|🤔`)
        let [a, b] = text.split`|`
        global.mess("wait", m)
        killua.sendFile(m.from, global.api("zenz", `/api/emojimix`, {text: a, text2: b}, "apikey"), "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
    },
    isQuery: true
}