const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "facebook",
    alias: ["fbdl"],
    desc: "Download Media From https://facebook.com",
    type: "downloader",
    example: "No Query Url, %prefix%command https://fb.watch/9F1vsetkrG",
    exec: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.parseInt("zenz", "/downloader/facebook", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result.media[1].url || fetch.result.media[0].url, "", m, { jpegThumbnail: await fetchBuffer(fetch.result.thumbnail), caption: `⭔ Title : ${fetch.result.tile}\n⭔ Source Url : ${fetch.result.url}` })
    },
    isQuery: true
}