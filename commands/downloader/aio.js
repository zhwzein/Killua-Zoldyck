const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "aio",
    alias: ["aiodl","ssyoutube","ssyt"],
    use: "<url>",
    desc: "Download All Video From SsYoutube",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/aio", { url: isUrl(text)[0] }, "apikey"))
        let array = []
        for (const a of fetch.result.url) {
            array.push([`${a.name} (${a.subname || a.ext})`, [[`Media Type ${a.type}`, `.dl ${a.url}`]]])
        }
        let caption = `⭔ *Title :* ${fetch.result.meta.title}\n⭔ *Duration :* ${fetch.result.meta.duration}\n⭔ *Source :* ${fetch.result.meta.source}`
        killua.sendList(m.from, "AIO Downloader", caption, config.footer, "Choose", array, m)
    },
    isQuery: true
}