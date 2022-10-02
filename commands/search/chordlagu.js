const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "chordlagu",
    alias: ["chord"],
    use: "<query>",
    desc: "Search Lyrics from Musixmatch",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/chordlagu", { query: text }, "apikey"))
        let caption = `Chord Lagu Search Query : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Result : ${i}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
