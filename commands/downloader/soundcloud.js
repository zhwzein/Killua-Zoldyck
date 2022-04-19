const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "soundcloud",
    alias: ["scdl"],
    desc: "Download Media From https://soundcloud.com",
    type: "downloader",
    example: "Example : %prefix%command https://soundcloud.com/kurniawanrizki/pamungkas-to-the-bone",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/soundcloud", { url: isUrl(text)[0] }, "apikey"))
        killua.sendFile(m.from, fetch.result.url, "", m)
    },
    isQuery: true
}