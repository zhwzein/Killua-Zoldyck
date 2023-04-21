const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "soundcloud",
    alias: ["scdl"],
    use: "<url>",
    desc: "Download Media From https://soundcloud.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async (killua, m, { text }) => {
        if (m.text.toLowerCase().endsWith("audio")) {
            killua.sendMessage(m.from, { audio: { url: isUrl(text)[0] }, mimetype: "audio/mpeg" }, { quoted: m })
        }
        let fetch = await fetchUrl(global.api("zenz", "/downloader/soundcloud", { url: isUrl(text)[0] }, "apikey"))
        let caption = `*Soundcloud Downloader*\n\n`
        let i = fetch.result
        caption += `⭔ Title : ${i.title}\n`
        caption += `⭔ Source : ${i.source}\n`
        caption += `⭔ Tags : ${i.tags}\n`
        caption += `⭔ Duration : ${i.duration}\n\n`
        let buttons = [
            { buttonId: `soundcloud ${i.url} audio`, buttonText: { displayText: 'Get Audio' }, type: 1 },
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