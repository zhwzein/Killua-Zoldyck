const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "ytplay",
    alias: ["play"],
    use: "<query>",
    desc: "Download Media From https://youtube.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/ytplay", { query: text }, "apikey"))
        let caption = `*Youtube Play*\n\n`
        let i = fetch.result
        caption += `⭔ Title : ${i.title}\n`
        caption += `⭔ Size : ${i.size}\n`
        caption += `⭔ Views : ${i.views}\n`
        caption += `⭔ Likes : ${i.likes}\n`
        caption += `⭔ Dislike : ${i.dislike}\n`
        caption += `⭔ Channel : ${i.channel}\n`
        caption += `⭔ UploadDate : ${i.uploadDate}\n\n`
        caption += `⭔ Desc : ${i.desc}\n`
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