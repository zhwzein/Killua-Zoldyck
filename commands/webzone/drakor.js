const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "drakor",
    alias: ["drakor"],
    use: "<query>",
    desc: "Search Korean story From drakorasia",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/drakor", { query: text }, "apikey"))
        let caption = `Drakor Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul : ${i.judul}\n`
            caption += `⭔ Years : ${i.years}\n`
            caption += `⭔ Genre : ${i.genre}\n`
            caption += `⭔ Thumbnail : ${i.thumbnail}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumbnail, "", m, { caption })
    },
    isQuery: true
}
