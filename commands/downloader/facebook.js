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
        killua.sendFile(m.from, fetch.result.medias[1].url || fetch.result.medias[0].url, "", m, { caption: `⭔ Title : ${fetch.result.title}\n⭔ Source Url : ${fetch.result.url}` })
    },
    isQuery: true
}