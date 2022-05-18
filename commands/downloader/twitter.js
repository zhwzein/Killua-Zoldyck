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
        let buttons = [
            {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.hd || fetch.result.sd },
            caption: `⭔ Desc : ${fetch.result.desc}\n⭔ Source Url : ${isUrl(text)[0]}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 5
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}