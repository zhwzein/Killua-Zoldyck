const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "instareel",
    alias: ["instagramreel"],
    desc: "Download Media From https://instagram.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.instagram.com/reel/CboJri0OSkR/",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram2", { url:isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        for (let url of fetch.result) killua.sendFile(m.from, url, "", m, { caption: `Download Media From : ${isUrl(text)[0]}` })
    },
    isQuery: true
}