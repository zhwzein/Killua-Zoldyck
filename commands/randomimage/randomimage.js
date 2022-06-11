module.exports = {
    name: "randomimage",
    alias: ["imagerandom"],
    use: "<query>",
    desc: "Generate Random Image From Apis",
    type: "randomimage",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await global.api("zenz", "/randomimage/" + text, {}, "apikey")
        let buttons = [
            {buttonId: `randomimage ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch },
            caption: `Random Image ${toUpper(text)}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["cosplay","darkjoke","meme","memeindo","patrick"]
}