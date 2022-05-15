const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "doujindesu",
    alias: [],
    use: "<query>",
    desc: "Latest or Search Anime From Doujindesu",
    type: "animeweb",
    example: `\nDoujindesu Latest : %prefix%command\nDoujindesu Search : %prefix%command <query> `,
    start: async(killua, m, { text }) => {
        if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/anime/doujindesu/search", { query: text }, "apikey"))
            let caption = `Doujindesu Search :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Score : ${i.score}\n`
                caption += `⭔ Status : ${i.status}\n`
                caption += `⭔ Link : ${i.link}\n\n`
            }
            killua.sendText(m.from, caption, m)
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/anime/doujindesu/latest", {}, "apikey"))
            let caption = `Doujindesu Latest :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Score : ${i.score}\n`
                caption += `⭔ Status : ${i.status}\n`
                caption += `⭔ Link : ${i.link}\n\n`
            }
            killua.sendText(m.from, caption, m)
        }
    }
}