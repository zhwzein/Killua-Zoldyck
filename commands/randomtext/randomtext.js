let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "randomtext",
    alias: ["textrandom"],
    desc: "Generate Random Text & Quotes",
    type: "randomtext",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    exec: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/" + text, {}, "apikey"))
        let buttons = [
            {buttonId: `randomtext ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            text: `Generate Random ${toUpper(text)}\n\n` + fetch.result.message,
            footer: `Powered By https://zenzapis.xyz`,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["motivasi","dilanquote","bucinquote","katasenja","creepyfact","faktaunik"]
}