const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "twitter",
    alias: ["twdl","twitdl","twitterdl"],
    use: "<url>",
    desc: "Download Media From https://twitter.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/twitter", { url: isUrl(text)[0] }, "apikey"))
        let caption = `*Facebook Downloader*\n\n`
        let i = fetch.result
        caption += `⭔ Title : ${i.title}\n`
        caption += `⭔ Source : ${i.source}\n`
        killua.sendFile(m.from, i.url, "", m, { caption })
    },
    isQuery: true
}