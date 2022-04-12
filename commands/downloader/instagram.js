const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "instagram",
    alias: ["igdl","instadl"],
    desc: "Download Media From https://instagram.com",
    type: "downloader",
    example: "No Query Url, %prefix%command https://www.instagram.com/p/COmKbcQDmIv&",
    exec: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.parseInt("zenz", "/downloader/instagram2", { url:isUrl(text)[0] }, "apikey"))
        for (let url of fetch.result) killua.sendFile(m.from, url, "", m, { caption: `Download Media From : ${isUrl(text)[0]}` })
    },
    isQuery: true
}