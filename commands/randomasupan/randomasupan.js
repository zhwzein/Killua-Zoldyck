module.exports = {
    name: "randomasupan",
    alias: ["asupanrandom"],
    use: "<query>",
    desc: "Generate Random Asupan From Apis",
    type: "randomasupan",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await global.api("zenz", "/randomasupan/" + text, {}, "apikey")
        let buttons = [
            {buttonId: `randomasupan ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch },
            caption: `Random Asupan ${toUpper(text)}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["cecan","china","thailand","vietnam","kayes","notnot","ryujin","justina","rose","kpop"]
}