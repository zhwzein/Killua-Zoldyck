const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "joox",
    alias: ["jooxplay"],
    use: "<query>",
    desc: "Download Media From https://joox.com",
    type: "downloader",
    example: "%prefix%command <query>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/joox", { query: text }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.lagu}\n⭔ Album : ${fetch.result.album}\n⭔ Penyanyi : ${fetch.result.penyanyi}\n⭔ Publish : ${fetch.result.publish}`
        let buttons = [
            {buttonId: `dl audio ${fetch.result.mp3Link}`, buttonText: { displayText: 'Audio MP3'}, type: 1 },
            {buttonId: `dl audio ${fetch.result.mp4aLink}`, buttonText: { displayText: 'Audio MP4A'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch.result.img },
            caption: teks,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}