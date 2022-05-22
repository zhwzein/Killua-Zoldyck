const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "twitter",
    alias: ["twdl","twitdl","twitterdl"],
    use: "<url>",
    desc: "Download Media From https://twitter.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/twitter", { url: isUrl(text)[0] }, "apikey"))
        let caption = `*Twitter Downloader*\n\n`
        let i = fetch.result
        caption += `⭔ Desc : ${i.desc}\n`
        let buttons = [
            {buttonId: `dl ${i.sd}`, buttonText: { displayText: 'Video SD'}, type: 1 },
            {buttonId: `dl ${i.hd}`, buttonText: { displayText: 'Video HD'}, type: 1 },
            {buttonId: `dl audio ${i.audio}`, buttonText: { displayText: 'Audio'}, type: 1 }
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