const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "pinterest",
    alias: ["pinterestdl"],
    use: "<url>",
    desc: "Download Video From https://pinterest.com",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/pinterestdl", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result, "", m)
    },
    isQuery: true
}