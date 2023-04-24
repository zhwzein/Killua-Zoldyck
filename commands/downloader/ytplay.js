const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "ytplay",
    alias: ["play"],
    use: "<query>",
    desc: "Download Media From https://youtube.com",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async (killua, m, { text }) => {
        if (m.text.toLowerCase().endsWith("audio")) {
            killua.sendMessage(m.from, { audio: { url: isUrl(text)[0] }, mimetype: "audio/mpeg" }, { quoted: m })
        } else if (m.text.toLowerCase().endsWith("video")) {
            killua.sendMessage(m.from, { video: { url: text.split(" ")[0] }, mimetype: "video/mp4" }, { quoted: m })
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/ytplay", { query: text }, "apikey"))
            let caption = `*Youtube Play*\n\n`
            let i = fetch.result
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Source : ${i.source}\n`
            caption += `⭔ Duration : ${i.duration}\n`
            let buttons = [
                { buttonId: `play ${i.getAudio} audio`, buttonText: { displayText: 'Get Audio' }, type: 1 },
                { buttonId: `play ${i.getVideo} video`, buttonText: { displayText: 'Get Video' }, type: 1 }
            ]
            let buttonMessage = {
                image: { url: i.thumb },
                caption: caption,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
    },
    isQuery: true
}