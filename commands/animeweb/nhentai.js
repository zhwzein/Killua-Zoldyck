const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nhentai",
    alias: [],
    use: "<query>",
    desc: "Search Anime From Nhentai",
    type: "animeweb",
    example: `%prefix%command 114512`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/anime/nhentai", { query: text }, "apikey"))
        let caption = `Nhentai Search :\n\n`
        let i = fetch.result
        caption += `⭔ ID : ${i.id}\n`
        caption += `⭔ English Title : ${i.title.english}\n`
        caption += `⭔ Japanese Title : ${i.title.japanese}\n`
        caption += `⭔ Pretty Title : ${i.title.pretty}\n`
        killua.sendFile(m.from, i.image[0], "", m, { caption })
    },
    isQuery: true
}