const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "mediafire",
    alias: ["mediafiredownload"],
    desc: "Download Media From https://mediafire.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.mediafire.com/file/jn1igcbjriwnmxx/Virtual_Z.apk/file",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/mediafire", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result, "", m)
    },
    isQuery: true
}