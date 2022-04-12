const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tikporn",
    alias: ["tikporn"],
    desc: "Download Media From tikporn",
    type: "downloader",
    example: "Example : %prefix%command",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/tikporn", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Desc :\n${fetch.result.desc}\n⭔ Upload :\n${fetch.result.upload}\n⭔ Like :\n${fetch.result.like}\n⭔ Dislike :\n${fetch.result.dislike}\n⭔ Views :\n${fetch.result.views}`
        killua.sendFile(m.from, fetch.result.video, "", m, { caption: teks })
    },
}