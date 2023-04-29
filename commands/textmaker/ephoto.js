module.exports = {
    name: "ephoto",
    alias: ["ephoto360"],
    use: "<query>",
    desc: "Create Maker From https://ephoto360.com/",
    type: "textmaker",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    start: async (killua, m, { text, args, prefix, command }) => {
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        switch (type) {
            case "american":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/american", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "anonymous":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/anonymous", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "aov":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/aov", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "arrow":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/arrow", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "arrow2":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/arrow2", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "blackpink":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/blackpink", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "blueneon":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/blueneon", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "cake":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/cake", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "caper":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/caper", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "cloth":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/cloth", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "cloud":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/cloud", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "coverpubg":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/coverpubg", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "crank":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/crank", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "dragonfire":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/dragonfire", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "eraser":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/eraser", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "foggy":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/foggy", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "glasses":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/glasses", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "graffiti":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/graffiti", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "greenbrush":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/greenbrush", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "hallowen":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/hallowen", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "horror":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/horror", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
            case "incandescent":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/incandescent", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "leafgraphy":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/leafgraphy", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "letters":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/letters", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "metals":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/metals", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "ml":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/ml", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "neonblue":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/neonblue", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "neonbp":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/neonbp", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "nightstars":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/nightstars", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "pig":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/pig", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "pubgavatar":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/pubgavatar", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "puppy":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/puppy", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "socialbutton":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/socialbutton", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "sunlight":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/sunlight", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "television":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/television", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "typography":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/typography", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "typography2":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/typography2", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "warface":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/warface", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "water":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/water", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break

            case "yasuologo":
                killua.sendFile(m.from, global.api("zenz", "/ephoto/yasuologo", { text: text1 }, "apikey"), "", m, { caption: `Generate Ephoto` })
                break
        }
    },
    isQuery: true
}

function type() {
    return [
        "american",
        "anonymous",
        "aov",
        "arrow",
        "arrow2",
        "blackpink",
        "blueneon",
        "cake",
        "caper",
        "cloth",
        "cloud",
        "coverpubg",
        "crank",
        "dragonfire",
        "eraser",
        "foggy",
        "glasses",
        "graffiti",
        "greenbrush",
        "hallowen",
        "horror",
        "incandescent",
        "leafgraphy",
        "letters",
        "metals",
        "ml",
        "neonblue",
        "neonbp",
        "nightstars",
        "pig",
        "pubgavatar",
        "puppy",
        "socialbutton",
        "sunlight",
        "television",
        "typography",
        "typography2",
        "warface",
        "water",
        "yasuologo"
    ]
}
