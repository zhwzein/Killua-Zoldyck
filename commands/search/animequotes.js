const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animequotes",
    alias: ["animequote"],
    use: "<query>",
    desc: "Search quotes from anime",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/animequotes", { query: text }, "apikey"))
        let caption = `Anime Quotes Query : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Quotes : ${i.quotes}\n\n`
        caption += `⭔ Character : ${i.character}\n`
        caption += `⭔ Anime : ${i.anime}\n`
        caption += `⭔ Episode : ${i.episode}\n\n`
        killua.sendFile(m.from, i.thumb, "", m, { caption })
    },
    isQuery: true
}