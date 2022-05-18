const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "twittermp3",
    alias: ["twitmp3","twtmp3","twitteraudio"],
    use: "<url>",
    desc: "Download Media From https://twitter.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { prefix, command, text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/twitter", { url: isUrl(text)[0] }, "apikey"))
        let buttons = [
            {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.thumb },
            caption: `⭔ Desc : ${fetch.result.desc}\n⭔ Source Url : ${isUrl(text)[0]}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
        killua.sendFile(m.from, fetch.result.audio, "", m)
    },
    isQuery: true
}