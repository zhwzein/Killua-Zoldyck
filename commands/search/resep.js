const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "resep",
    alias: ["resep"],
    use: "<query>",
    desc: "Search Resep Information",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/resep", { query: text }, "apikey"))
        let caption = `Searching Resep : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Judul : ${i.judul}\n`
        caption += `⭔ Url : ${i.link}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
