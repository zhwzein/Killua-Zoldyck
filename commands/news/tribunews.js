const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "tribunews",
    alias: ["tribunnews"],
    desc: "Latest News From Tribunews",
    type: "news",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/news/tribunews", {}, "apikey"))
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
