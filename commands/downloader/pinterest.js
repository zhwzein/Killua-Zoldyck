const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "pinterest",
    alias: ["pinterestdl"],
    desc: "Download Video From https://pinterest.com",
    type: "downloader",
    example: "Example : %prefix%command https://id.pinterest.com/pin/461900505542255676/",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/pinterestdl", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result, "", m, { caption: `Download Pinterest Video From : ${isUrl(text)[0]}` })
    },
    isQuery: true
}