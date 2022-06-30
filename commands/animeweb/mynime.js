const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "mynime",
    alias: ["mynimeku"],
    use: "<query> | <url>",
    desc: "Search Information Anime From Mynimeku",
    type: "animeweb",
    example: `\nMyNime Search : %prefix%command <query> | <url> For Detail`,
    start: async(killua, m, { text }) => {
        if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/mynime/detail", { url: isUrl(text)[0] }, "apikey"))
            let caption = `Mynimeku Detail :\n\n`
            let res = fetch.result
            caption += `⭔ Title : ${res.title}\n`
            caption += `⭔ Japanese Title : ${res.title_japanese}\n`
            caption += `⭔ Rating : ${res.rating}\n`
            caption += `⭔ Musim : ${res.musim}\n`
            caption += `⭔ Studio : ${res.studio}\n`
            caption += `⭔ Episode : ${res.episode}\n`
            caption += `⭔ Aired : ${res.aired}\n`
            caption += `⭔ Genre : ${res.genre}\n`
            caption += `⭔ Synopsis : ${res.synopsis}\n\n`
            caption += `⭔ Episode List :\n\n`
            for (let i of fetch.result.episode_list) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ link : ${i.link}\n\n`
            }
            killua.sendFile(m.from, res.thumb, "", m, { caption })
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/mynime/search", { query: text }, "apikey"))
            let caption = `Mynimeku Search :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Link : ${i.url}\n\n`
            }
            killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
        }
    }
}