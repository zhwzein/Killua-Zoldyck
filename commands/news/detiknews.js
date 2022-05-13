const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "detiknews",
    alias: ["detiknews"],
    desc: "Latest News From Detiknews",
    type: "news",
    example: `Example : %prefix%command`,
    exec: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/detiknews", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Latest News From Detiknews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.berita}\n`
            caption += `⭔ Di Upload : ${i.berita_diupload}\n`
            caption += `⭔ Url : ${i.berita_url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].berita_thumb, "", m, { caption })
    }
}
