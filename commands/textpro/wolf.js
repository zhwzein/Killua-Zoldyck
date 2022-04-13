module.exports = {
    name: "wolf",
    alias: [],
    desc: "Create Maker Wolf From https://textpro.me",
    type: "textpro",
    example: "List Type :\n\n1. logo\n2. galaxy\n\nExample : %prefix%command <type> <text1|text2>",
    exec: async(killua, m, { text, prefix, args }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch(type) {
            case "logo":
                killua.sendFile(m.from, global.api("zenz", "/textpro/logowolf", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `Textpro Wolf Logo`})
            break
            case "galaxy":
                killua.sendFile(m.from, global.api("zenz", "/textpro/logowolf2", { text: text1, text2: text2 }, "apikey"), "", m, { caption: `Textpro Wolf Galaxy`})
            break
        }
    },
    isQuery: true
}
