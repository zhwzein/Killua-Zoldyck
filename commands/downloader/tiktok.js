const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktok",
    alias: ["ttdl","tiktoknowm","ttnowm"],
    use: "<url>",
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/tiktok", { url: isUrl(text)[0] }, "apikey"))
            let caption = `*Tiktok Downloader*\n\n`
            let i = fetch.result

            caption += `⭔ Author : ${i.author.unique_id}\n`
            caption += `⭔ Created At : ${i.created_at}\n`
            caption += `⭔ Title : ${i.title}\n`

            let buttons = [
                {buttonId: `dl ${i.video.noWatermark}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                {buttonId: `dl ${i.video.watermark}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                {buttonId: `dl ${i.music.play_url}`, buttonText: {displayText: '► Sound Only'}, type: 1}
            ]
            let buttonMessage = {
                image: { url: i.video.cover },
                caption: caption,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}