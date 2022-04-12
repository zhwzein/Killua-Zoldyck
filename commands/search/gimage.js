let { fetchBuffer, fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "gimage",
    alias: ["image"],
    desc: "Search Image from Google",
    type: "search",
    example: "No Query Title, %prefix%command killua",
    exec: async(killua, m, { text, command, toUpper }) => {
        if (!text) return m.reply(`Example : ${prefix + command} killua Morou`)
        let fetch = await fetchUrl(global.api("zenz", "/searching/gimage", { query: text }, "apikey"))
        let random = fetch.result[Math.floor(Math.random() * fetch.result.length)]
        let buttons = [
            {buttonId: `pinterest ${text}`, buttonText: { displayText: 'Next Image'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: random },
            caption: `Search Google Image Query : ${toUpper(text)}`,
            footer: `Powered By https://zenzapi.xyz`,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}