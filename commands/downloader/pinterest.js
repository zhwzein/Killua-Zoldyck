const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "pinterest",
    alias: ["pinterestdl"],
    desc: "Download Media From https://pinterest.com",
    type: "downloader",
    example: "Example : %prefix%command https://id.pinterest.com/pin/461900505542255676/",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/pinterestdl", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        killua.sendFile(m.from, fetch.result, "", m, { caption: `Download Pinterest From : ${isUrl(text)[0]}` })
    },
    isQuery: true
}