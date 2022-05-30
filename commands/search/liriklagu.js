const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "liriklagu",
    alias: ["lirik"],
    use: "<query>",
    desc: "Search Lyrics from Musixmatch",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/liriklagu", { query: text }, "apikey"))
        let caption = `Lyric Search Query : ${toUpper(text)}\n\n`
        caption += `⭔ Title : ${i.judul}\n`
        caption += `⭔ Singer : ${i.penyanyi}\n\n`
        caption += `⭔ Lyrics : ${i.lirik}\n`
        killua.sendFile(m.from, fetch.result.thumb, "", m, { caption })
    },
    isQuery: true
}