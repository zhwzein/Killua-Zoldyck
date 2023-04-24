const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "youtubeshorts",
    alias: ["ytshorts","ytreels"],
    use: "<url>",
    desc: "Download Media From https://youtube.com",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/ytshorts", { url: isUrl(text)[0] }, "apikey"))
        let caption = `*Youtube Shorts Downloader*\n\n`
        let i = fetch.result
        caption += `⭔ Title : ${i.title}\n`
        caption += `⭔ source : ${i.source}\n`
        caption += `⭔ duration : ${i.duration}\n\n`
        let buttons = [
            {buttonId: `dl audio ${i.getVideo}`, buttonText: { displayText: 'Get Audio'}, type: 1 },
            {buttonId: `dl ${i.getVideo}`, buttonText: { displayText: 'Get Video'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: i.thumb },
            caption: caption,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}
