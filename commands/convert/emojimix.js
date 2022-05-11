module.exports = {
    name: "emojimix",
    alias: ["emojimashup"],
    desc: "Convert Emoji Mix To Sticker",
    type: "convert",
    example: "Example : %prefix%command 😅🤔",
    exec: async(killua, m, { args }) => {
        let [a, b] = args.join("")
        if (b) {
            killua.sendFile(m.from, global.api("zenz", `/creator/emojimix`, {text: a, text2: b}, "apikey"), "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
        } else if (!b) {
            killua.sendFile(m.from, global.api("zenz", `/creator/emojimix2`, {text: a}, "apikey"), "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
        }
    },
    isQuery: true
}