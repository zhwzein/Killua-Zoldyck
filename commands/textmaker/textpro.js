module.exports = {
    name: "textpro",
    alias: ["textprome"],
    use: "<query>",
    desc: "Create Maker From https://textpro.me",
    type: "textmaker",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    start: async(killua, m, { text, args }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch(type) {
            case "christmas": 
                killua.sendFile(m.from, global.api("zenz", "/textpro/3dchristmas", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Christmas`})
            break
            case "deepsea":
                killua.sendFile(m.from, global.api("zenz", "/textpro/3ddeepsea", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Deep Sea`})
            break
            case "scfi":
                killua.sendFile(m.from, global.api("zenz", "/textpro/3dscfi", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Scfi`})
            break
            case "rainbow":
                killua.sendFile(m.from, global.api("zenz", "/textpro/3draindow", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Rainbow`})
            break
            case "pipe":
                killua.sendFile(m.from, global.api("zenz", "/textpro/3dwaterpipe", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Water Pipe`})
            break
            case "stone":
                killua.sendFile(m.from, global.api("zenz", "/textpro/crackedstone", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Cracked Stone`})
            break
            case "neon":
                killua.sendFile(m.from, global.api("zenz", "/textpro/3dneonlight", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Neon Light`})
            break
            case "gradient":
                killua.sendFile(m.from, global.api("zenz", "/textpro/3dgradient", { text: text1 }, "apikey"), "", m, { caption: `Textpro 3D Gradient`})
            break
            case "american": 
                killua.sendFile(m.from, global.api("zenz", "/textpro/americanflag", { text: text1 }, "apikey"), "", m, { caption: `Textpro American Flag`})
            break
            case "halloween":
                killua.sendFile(m.from, global.api("zenz", "/textpro/halloween", { text: text1 }, "apikey"), "", m, { caption: `Textpro Halloween`})
            break
            case "sketch":
                killua.sendFile(m.from, global.api("zenz", "/textpro/sketch", { text: text1 }, "apikey"), "", m, { caption: `Textpro Sketch`})
            break
            case "circuit":
                killua.sendFile(m.from, global.api("zenz", "/textpro/bluecircuit", { text: text1 }, "apikey"), "", m, { caption: `Textpro Blue Circuit`})
            break
            case "space":
                killua.sendFile(m.from, global.api("zenz", "/textpro/space", { text: text1 }, "apikey"), "", m, { caption: `Textpro Space`})
            break
            case "metalic":
                killua.sendFile(m.from, global.api("zenz", "/textpro/metalic", { text: text1 }, "apikey"), "", m, { caption: `Textpro Metalic`})
            break
            case "fiction":
                killua.sendFile(m.from, global.api("zenz", "/textpro/fiction", { text: text1 }, "apikey"), "", m, { caption: `Textpro Fiction`})
            break
            case "horror":
                killua.sendFile(m.from, global.api("zenz", "/textpro/greenhorror", { text: text1 }, "apikey"), "", m, { caption: `Textpro Green Horror`})
            break
            case "transformer":
                killua.sendFile(m.from, global.api("zenz", "/textpro/fiction", { text: text1 }, "apikey"), "", m, { caption: `Textpro Fiction`})
            break
            case "berry":
                killua.sendFile(m.from, global.api("zenz", "/textpro/berry", { text: text1 }, "apikey"), "", m, { caption: `Textpro Berry`})
            break
            case "thunder":
                killua.sendFile(m.from, global.api("zenz", "/textpro/thunder", { text: text1 }, "apikey"), "", m, { caption: `Textpro Thunder`})
            break
            case "magma": 
                killua.sendFile(m.from, global.api("zenz", "/textpro/magma", { text: text1 }, "apikey"), "", m, { caption: `Textpro Magma`})
            break
            case "impressive":
                killua.sendFile(m.from, global.api("zenz", "/textpro/impressivetext", { text: text1 }, "apikey"), "", m, { caption: `Textpro Impressive Text`})
            break
            case "glitch":
                if (!text2) return m.reply("No Query Text2")
                killua.sendFile(m.from, global.api("zenz", "/textpro/glitch", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Glitch`})
            break
            case "harrypotter":
                killua.sendFile(m.from, global.api("zenz", "/textpro/harrypotter", { text: text1 }, "apikey"), "", m, { caption: `Textpro Harry Potter`})
            break
            case "foggy":
                killua.sendFile(m.from, global.api("zenz", "/textpro/foggywindows", { text: text1 }, "apikey"), "", m, { caption: `Textpro Foggy Windows`})
            break
            case "neon":
                killua.sendFile(m.from, global.api("zenz", "/textpro/neondevil", { text: text1 }, "apikey"), "", m, { caption: `Textpro Neon Devil`})
            break
            case "holiday":
                killua.sendFile(m.from, global.api("zenz", "/textpro/christmas", { text: text1 }, "apikey"), "", m, { caption: `Textpro Christmas Holiday`})
            break
            case "blackpink":
                killua.sendFile(m.from, global.api("zenz", "/textpro/blackpink", { text: text1 }, "apikey"), "", m, { caption: `Textpro Black Pink`})
            break
            case "glue":
                killua.sendFile(m.from, global.api("zenz", "/textpro/gluetext", { text: text1 }, "apikey"), "", m, { caption: `Textpro Glue Text`})
            break
            case "pornhub":
                if (!text2) return m.reply("No Query Text2")
                killua.sendFile(m.from, global.api("zenz", "/textpro/pornhub", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Pornhub`})
            break
            case "marvel":
                if (!text2) return m.reply("No Query Text2")
                killua.sendFile(m.from, global.api("zenz", "/textpro/marvel", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Marvel Studio`})
            break
            case "wolf":
                if (!text2) return m.reply("No Query Text2")
                killua.sendFile(m.from, global.api("zenz", "/textpro/logowolf", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Logo Wolf`})
            break
            case "wolf2":
                if (!text2) return m.reply("No Query Text2")
                killua.sendFile(m.from, global.api("zenz", "/textpro/logowolf2", { text: text1, text2 }, "apikey"), "", m, { caption: `Textpro Wolf Galaxy`})
            break
            case "natural":
                killua.sendFile(m.from, global.api("zenz", "/textpro/natural", { text: text1 }, "apikey"), "", m, { caption: `Textpro Natural`})
            break
            case "firework":
                killua.sendFile(m.from, global.api("zenz", "/textpro/firework", { text: text1 }, "apikey"), "", m, { caption: `Textpro Firework`})
            break
            case "matrix":
                killua.sendFile(m.from, global.api("zenz", "/textpro/matrix", { text: text1 }, "apikey"), "", m, { caption: `Textpro Matrix`})
            break
            case "dropwater":
                killua.sendFile(m.from, global.api("zenz", "/textpro/dropwater", { text: text1 }, "apikey"), "", m, { caption: `Textpro Drop Water`})
            break
        }
    },
    isQuery: true
}

function type() {
    return ["natural","firework","matrix","dropwater","holiday","blackpink","glue","pornhub","marvel","wolf","wolf2","neon","holiday","blackpink","foggy","harrypotter","glitch","christmas","deepsea","scfi","rainbow","pipe","stone","neon","gradient","american","halloween","sketch","circuit","space","metalic","fiction","horror","transformer","berry","thunder","magma","impressive"]
}
