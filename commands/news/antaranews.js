const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "antaranews",
    alias: ["antaranews"],
    desc: "Latest News From Antara News",
    type: "news",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/news/antaranews", {}, "apikey"))
        let caption = `Latest News From Antaranews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Jenis : ${i.berita_jenis}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].berita_thumb, "", m, { caption })
    }
}
