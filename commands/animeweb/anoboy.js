const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "anoboy",
    alias: ["anoboy"],
    use: "<query>",
    desc: "Search Anime From Anoboy",
    type: "animeweb",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/anoboy/search", { query: text }, "apikey"))
        let caption = `Anoboy Search :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.judul}\n`
            caption += `⭔ Link : ${i.link}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}