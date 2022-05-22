const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "facebook",
    alias: ["fbdl","fb"],
    use: "<url>",
    desc: "Download Video From https://facebook.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/facebook", { url: isUrl(text)[0] }, "apikey"))
        let caption = `*Facebook Downloader*\n\n`
        let i = fetch.result
        caption += `⭔ Title : ${i.title}\n`
        caption += `⭔ Source Url : ${i.url}\n`
        caption += `⭔ Duration : ${i.duration}\n`
        caption += `⭔ Source : ${i.source}\n`
        let buttons = [
            {buttonId: `dl ${i.medias[0].url}`, buttonText: { displayText: 'Video SD'}, type: 1 },
            {buttonId: `dl ${i.medias[1].url}`, buttonText: { displayText: 'Video HD'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: i.thumbnail },
            caption: caption,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}