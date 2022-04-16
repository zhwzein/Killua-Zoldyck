const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "twitter",
    alias: ["twdl","twitdl","twitterdl"],
    desc: "Download Media From https://twitter.com",
    type: "downloader",
    example: "Example : %prefix%command https://twitter.com/i/status/1463482301136789509",
    exec: async(killua, m, { prefix, command, text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/twitter", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let buttons = [
            {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.HD || fetch.result.SD },
            caption: `⭔ Desc : ${fetch.result.desc}\n⭔ Source Url : ${isUrl(text)[0]}`,
            footer: 'Powered by https://zenzapis.xyz',
            buttons: buttons,
            headerType: 5
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}