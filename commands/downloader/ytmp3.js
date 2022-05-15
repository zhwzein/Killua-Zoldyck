const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "ytmp3",
    alias: ["yt3"],
    use: "<url>",
    desc: "Download Media From https://youtube.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/ytmp3", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result.url, "", m)
    },
    isQuery: true
}