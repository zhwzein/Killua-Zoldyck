const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "komikstation",
    alias: [],
    use: "<query>",
    desc: "Search Anime From Komikstation",
    type: "animeweb",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/komikstation", { query: text }, "apikey"))
        let caption = `Komikstation Search :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.manga_name}\n`
            caption += `⭔ Episode : ${i.manga_eps}\n`
            caption += `⭔ Link : ${i.manga_url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].manga_thumb, "", m, { caption })
    },
    isQuery: true
}