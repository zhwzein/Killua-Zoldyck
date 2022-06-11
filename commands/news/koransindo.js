const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "koransindo",
    alias: ["koransindonews"],
    desc: "Latest News From Koransindo",
    type: "news",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/news/koransindo", {}, "apikey"))
        let caption = `Latest News From Koransindo\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Jenis Berita : ${i.berita_jenis}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        killua.sendText(m.from, caption, m)
    }
}
