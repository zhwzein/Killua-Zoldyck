const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "cocofun",
    alias: ["cocofun"],
    desc: "Download Media From cocofun",
    type: "downloader",
    example: "Example : %prefix%command http://i.coco.fun/short/1513tui",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/cocofun", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Desc :\n${fetch.result.desc}\n⭔ Like :\n${fetch.result.like}\n⭔ Count :\n${fetch.result.play_count}\n⭔ Shared :\n${fetch.result.shared}\n⭔ Resolution :\n${fetch.result.resolution}\n⭔ Duration :\n${fetch.result.duration}`
        killua.sendFile(m.from, fetch.result.url, "", m, { caption: teks })

    },
    isQuery: true
}