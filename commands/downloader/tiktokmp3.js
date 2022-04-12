const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktokmp3",
    alias: ["tiktokmp3","ttmp3","tiktokaudio"],
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.tiktok.com/@vernalta/video/695975110141126579",
    exec: async(killua, m, { prefix, command, text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let buttons = [
            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
            {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► Without Watermark'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.prefiew },
            caption: `Download Tiktok From : ${isUrl(text)[0]}`,
            footer: 'Powered by https://zenzapi.xyz',
            buttons: buttons,
            headerType: 5
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
        killua.sendFile(m.from, fetch.result.audio, "", m)
    },
    isQuery: true
}