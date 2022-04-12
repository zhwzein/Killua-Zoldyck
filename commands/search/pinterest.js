let { fetchBuffer, fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "pinterest",
    alias: ["pin"],
    desc: "Search Image from Pinterest",
    type: "search",
    example: "No Query Title, %prefix%command killua",
    exec: async(killua, m, { text, command, toUpper }) => {
        if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/pinterestdl", { url: isUrl(text)[0] }, "apikey"))
            killua.sendFile(m.from, fetch.result, "", m, { caption: `Download Pinterest From : ${isUrl(text)[0]}` })
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/searching/pinterest", { query: text }, "apikey"))
            let random = fetch.result[Math.floor(Math.random() * fetch.result.length)]
            let buttons = [
                {buttonId: `pinterest ${text}`, buttonText: { displayText: 'Next Image'}, type: 1 }
            ]  
            let buttonMessage = {
                image: { url: random },
                caption: `Search Pinterest Query : ${toUpper(text)}`,
                footer: `Powered By https://zenzapi.xyz`,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
    },
    isQuery: true
}