const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "ytmp4",
    alias: ["yt4"],
    desc: "Download Media From https://youtube.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.youtube.com/watch?v=hlznpxNGFGQ&list=RDMMiI1VlXspMp8",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/ytmp4", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result.url, "", m)
    },
    isQuery: true
}