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
        caption += `⭔ Duration : ${i.duration}\n`
        caption += `⭔ Source : ${i.source}\n`
        killua.sendFile(m.from, i.url, "", m, { caption })
    },
    isQuery: true
}