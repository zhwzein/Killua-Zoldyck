const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktok",
    alias: ["ttdl","tiktoknowm","ttnowm"],
    use: "<url>",
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
        let buttons = [
            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
            {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.nowm },
            caption: `Download Tiktok From : ${isUrl(text)[0]}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 5
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}