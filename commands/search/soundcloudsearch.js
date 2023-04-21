const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "soundcloudsearch",
    alias: ["scsearch"],
    use: "<query>",
    desc: "Search Audio From SoundCloud",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/soundcloud/search", { query: text }, "apikey"))
        let caption = `SoundCloud Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Timestamp : ${i.timestamp}\n`
            caption += `⭔ Release : ${i.release}\n`
            caption += `⭔ Views : ${i.views}\n`
            caption += `⭔ Artist : ${i.artist}\n`
            caption += `⭔ Url : ${i.url}\n`
            caption += `\n─────────────────\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}