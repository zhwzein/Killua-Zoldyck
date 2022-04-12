const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "mediafire",
    alias: ["mediafire"],
    desc: "Download Media From https://mediafire.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.mediafire.com/file/jn1igcbjriwnmxx/Virtual_Z.apk/file",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/mediafire", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        killua.sendFile(m.from, fetch.result, "", m)
    },
    isQuery: true
}