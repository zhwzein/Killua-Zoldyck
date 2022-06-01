const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "xnxxsearch",
    alias: ["xnxxsr"],
    use: "<query>",
    desc: "Search porn videos xnxx",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, command, prefix, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/xnxx", { query: text }, "apikey"))
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
