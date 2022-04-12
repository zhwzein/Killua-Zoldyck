const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "xnxxsearch",
    alias: ["xnxxsr"],
    desc: "Search porn videos xnxx",
    type: "search",
    example: `Example : %prefix%command blonde`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/xnxx/search", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Xnxx Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Thumb : ${i.thumb}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}
