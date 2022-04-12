const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "hentaivid",
    alias: ["hentaivideo"],
    desc: "Download Media From hentaivid",
    type: "downloader",
    example: "Example : %prefix%command",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/hentaivid", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Category :\n${fetch.result.category}\n⭔ Share :\n${fetch.result.share_count}\n⭔ Views :\n${fetch.result.views_count}`
        killua.sendFile(m.from, fetch.result.video_1, "", m, { caption: teks })
    },
}