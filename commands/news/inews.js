const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "inews",
    alias: ["inews"],
    desc: "Latest News From inews",
    type: "news",
    example: `Example : %prefix%command`,
    exec: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/inews", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Latest News From inews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Jenis Berita : ${i.berita_jenis}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        killua.sendText(m.from, caption, m)
    }
}
