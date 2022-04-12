const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "twitter",
    alias: ["twdl","twitdl","twitterdl"],
    desc: "Download Media From https://twitter.com",
    type: "downloader",
    example: "No Query Url, %prefix%command https://twitter.com/i/status/1463482301136789509",
    exec: async(killua, m, { prefix, command, text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/twitter", { url: isUrl(text)[0] }, "apikey"))
        let buttons = [
            {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.HD || fetch.result.SD },
            caption: `⭔ Desc : ${fetch.result.desc}\n⭔ Source Url : ${isUrl(text)[0]}`,
            footer: 'Powered by https://zenzapi.xyz',
            buttons: buttons,
            headerType: 5
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}