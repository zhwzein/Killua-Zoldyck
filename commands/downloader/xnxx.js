const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "xnxx",
    alias: ["xnxx"],
    use: "<url>",
    desc: "Download Media From https://xnxx.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { prefix, command, text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/xnxx", { url: isUrl(text)[0] }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Duration : ${fetch.result.duration}s`
        killua.sendFile(m.from, fetch.result.files.low, "", m, { caption: teks })
    },
    isQuery: true
}