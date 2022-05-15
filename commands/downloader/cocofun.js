const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "cocofun",
    alias: ["cocovideo"],
    use: "<url>",
    desc: "Download Video From cocofun",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/cocofun", { url: isUrl(text)[0] }, "apikey"))
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Desc : ${fetch.result.desc}\n⭔ Like : ${fetch.result.like}\n⭔ Count : ${fetch.result.play_count}\n⭔ Shared : ${fetch.result.shared}\n⭔ Resolution : ${fetch.result.resolution}\n⭔ Duration : ${fetch.result.duration}\n\n`
        killua.sendFile(m.from, fetch.result.url, "", m, { caption: teks })
    },
    isQuery: true
}