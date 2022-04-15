module.exports = {
    name: "ephoto",
    alias: ["ephoto360"],
    desc: "Create Maker From https://ephoto360.com/",
    type: "textmaker",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    exec: async(hisoka, m, { text, args, command }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch(type) {
            case "freefire":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/ffcover", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Free Fire Cover`})
            break
            case "crossfire":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/crossfire", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Cross Fire`})
            break
            case "galaxy":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/galaxy", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Galaxy`})
            break
            case "glass":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/glass", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Glass`})
            break
            case "neon":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/neon", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Neon`})
            break
            case "beach":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/becah", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Beach`})
            break
            case "blackpink":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/blackpink", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Blackpink`})
            break
            case "igcertificate":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/igcertificate", { text: text1 }, "apikey"), "", m, { caption: `Ephoto Instagram Certificate`})
            break
            case "ytcertificate":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/ytcertificate", { text: text1 }, "apikey"), "", m, { caption: `Ephoto YouTube Certificate`})
            break
            case "valorant":
                if (!text2) return m.reply(`Example : ${prefix + command} valorant Kimi|NO|Namae`)
                killua.sendFile(m.from, global.api("zenz", "/ephoto/valorant", { text: text1, text2: text2, text3: text2 }, "apikey"), "", m, { caption: `Ephoto Valorant`})
            break
        }
    }
}

function type() {
    return ["freefire","crossfire","galaxy","glass","neon","beach","blackpink","igcertificate","ytcertificate"]
}
