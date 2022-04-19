const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "webtoons",
    alias: ["webtoon"],
    desc: "Search story From webtoons",
    type: "webzone",
    example: `Example : %prefix%command love`,
    exec: async(killua, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/webtoons", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Webtoons Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul : ${i.judul}\n`
            caption += `⭔ Like : ${i.like}\n`
            caption += `⭔ Creator : ${i.creator}\n`
            caption += `⭔ Genre : ${i.genre}\n`
            caption += `⭔ Thumbnail : ${i.thumbnail}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        //killua.sendFile(m.from, fetch.result[0].img, "", m, { caption }) yg gambarnya kena internet positif
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
