const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktokmp3",
    alias: ["tiktokmp3","ttmp3","tiktokaudio"],
    use: "<url>",
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
        let buttons = [
            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
            {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► Without Watermark'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.prefiew },
            caption: `Download Tiktok From : ${isUrl(text)[0]}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 5
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
        killua.sendFile(m.from, fetch.result.audio, "", m)
    },
    isQuery: true
}