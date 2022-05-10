const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "facebook",
    alias: ["fbdl"],
    desc: "Download Video From https://facebook.com",
    type: "downloader",
    example: "Example : %prefix%command https://fb.watch/9F1vsetkrG",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/facebook", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        killua.sendFile(m.from, fetch.result.medias[1].url || fetch.result.medias[0].url, "", m, { caption: `⭔ Title : ${fetch.result.title}\n⭔ Source Url : ${fetch.result.url}` })
    },
    isQuery: true
}