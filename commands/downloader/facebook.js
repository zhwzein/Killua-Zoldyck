const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "facebook",
    alias: ["fbdl","fb"],
    use: "<url>",
    desc: "Download Video From https://facebook.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/facebook/v2", { url: isUrl(text)[0] }, "apikey"))
        let caption = `*Facebook Downloader*\n\n`
        let i = fetch.result
        caption += `⭔ Author : ${i.author}\n`
        caption += `⭔ Title : ${i.title}\n`
        let buttons = [
            {buttonId: `dl ${i.sd}`, buttonText: { displayText: 'Video SD'}, type: 1 },
            {buttonId: `dl ${i.hd}`, buttonText: { displayText: 'Video HD'}, type: 1 }
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