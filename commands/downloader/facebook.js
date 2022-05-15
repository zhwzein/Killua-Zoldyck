const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "facebook",
    alias: ["fbdl","fb"],
    use: "<url>",
    desc: "Download Video From https://facebook.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/facebook", { url: isUrl(text)[0] }, "apikey"))
        let caption = `*Facebook Downloader*\n\n`
        let i = fetch.result
        caption += `⭔ Title : ${i.title}\n`
        caption += `⭔ Source Url : ${i.url}\n`
        caption += `⭔ quality : ${i.medias[0].quality}\n`
        caption += `⭔ extension : ${i.medias[0].extension}\n`
        caption += `⭔ size : ${i.medias[0].size}\n`
        caption += `⭔ formattedSize : ${i.medias[0].formattedSize}\n`
        killua.sendFile(m.from, fetch.result.medias[0].url, "", m, { caption })
    },
    isQuery: true
}