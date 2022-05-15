const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "mediafire",
    alias: ["mediafiredownload"],
    use: "<url>",
    desc: "Download Media From https://mediafire.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/mediafire", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result, "", m)
    },
    isQuery: true
}