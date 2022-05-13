const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "tribunews",
    alias: ["tribunnews"],
    desc: "Latest News From Tribunews",
    type: "news",
    example: `Example : %prefix%command`,
    exec: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/tribunews", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Latest News From Tribunews\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul Berita : ${i.title}\n`
            caption += `⭔ Di Upload : ${i.title}\n`
            caption += `⭔ Desc : ${i.desc}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        killua.sendText(m.from, caption, m)
    }
}
