const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "joox",
    alias: ["jooxplay"],
    desc: "Download Media From https://joox.com",
    type: "downloader",
    example: "Example : %prefix%command Snowman",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/joox", { query: text }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.lagu}\n⭔ Album : ${fetch.result.album}\n⭔ Penyanyi : ${fetch.result.penyanyi}\n⭔ Publish : ${fetch.result.publish}`
        killua.sendFile(m.from, fetch.result.img, "", m, { caption: teks })
        killua.sendFile(m.from, fetch.result.mp3Link || fetch.result.mp4aLink, "", m)
    },
    isQuery: true
}