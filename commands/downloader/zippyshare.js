const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "zippyshare",
    alias: ["zippydownload"],
    desc: "Download Media From https://zippyshare.com",
    type: "downloader",
    example: "Example : %prefix%command https://www46.zippyshare.com/v/Lfea7zv1/file.html",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/zippyshare", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        killua.sendFile(m.from, fetch.result.link, "", m)
    },
    isQuery: true
}