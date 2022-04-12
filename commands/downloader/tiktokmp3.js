const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktokmp3",
    alias: ["tiktokmp3","ttmp3","tiktokaudio"],
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "No Query Url, %prefix%command https://www.tiktok.com/@vernalta/video/6959751101411265793&apikey=stayhalalbrader",
    exec: async(killua, m, { prefix, command, text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
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
        killua.sendFile(m.from, { audio: { url: fetch.result.audio }, mimetype: "audio/mpeg" }, { quoted: m })
    },
    isQuery: true
}