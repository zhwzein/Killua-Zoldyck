const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "otakudesu",
    alias: ["otakudes"],
    use: "<query> | <url>",
    desc: "Search Information Anime From Otakudesu",
    type: "animeweb",
    example: `\nOtakudesu Search : %prefix%command <query> | <url> For Detail`,
    start: async(killua, m, { text }) => {
        if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/otakudesu/info", { url: isUrl(text)[0] }, "apikey"))
            let caption = `Otakudesu Detail :\n\n`
            let res = fetch.result
            caption += `⭔ Title : ${res.title}\n`
            caption += `⭔ Japanese Title : ${res.title_japanese}\n`
            caption += `⭔ Rating : ${res.score}\n`
            caption += `⭔ Studio : ${res.producer}\n`
            caption += `⭔ Type : ${res.type}\n`
            caption += `⭔ Status : ${res.status}\n`
            caption += `⭔ Totaleps : ${res.total_eps}\n`
            caption += `⭔ Duration : ${res.duration}\n`
            caption += `⭔ Release Date : ${res.release_date}\n`
            caption += `⭔ Studio : ${res.studio}\n`
            caption += `⭔ Genre : ${res.genre}\n`
            caption += `⭔ Sinopsis : ${res.sinopsis}\n\n`
            caption += `⭔ Episode List :\n\n`
            for (let i of fetch.result.episode) {
                caption += `⭔ Title : ${i._title}\n`
                caption += `⭔ link : ${i._eps}\n\n`
            }
            killua.sendFile(m.from, res.thumb, "", m, { caption })
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/otakudesu/search", { query: text }, "apikey"))
            let caption = `Otakudesu Search :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Link : ${i.link}\n\n`
            }
            killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
        }
    }
}