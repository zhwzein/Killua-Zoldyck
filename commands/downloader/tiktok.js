const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktok",
    alias: ["ttdl","tiktoknowm","ttnowm"],
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.tiktok.com/@vernalta/video/6959751101411265793",
    exec: async(killua, m, { prefix, command, text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let buttons = [
            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
            {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.nowm },
            caption: `Download Tiktok From : ${isUrl(text)[0]}`,
            footer: 'Powered by https://zenzapis.xyz',
            buttons: buttons,
            headerType: 5
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}