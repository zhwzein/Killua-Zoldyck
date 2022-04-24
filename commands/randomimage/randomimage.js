module.exports = {
    name: "randomimage",
    alias: ["imagerandom"],
    desc: "Generate Random Image From Apis",
    type: "randomimage",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    exec: async(killua, m, { text, toUpper }) => {
        let fetch = await global.api("zenz", "/api/random/" + text, {}, "apikey")
        let buttons = [
            {buttonId: `randomimage ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch },
            caption: `Random Image ${toUpper(text)}`,
            footer: `Powered By https://zenzapis.xyz`,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["cosplay","darkjoke","meme","memeindo","anime","waifu","husbu","neko","shinobu","megumin","patrick","waifus","nekos","trap","blowjob"]
}