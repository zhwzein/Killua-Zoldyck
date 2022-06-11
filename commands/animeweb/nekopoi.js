const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nekopoi",
    alias: [],
    use: "<query>",
    desc: "Latest or Random or Search Anime From Nekopoi",
    type: "animeweb",
    example: `\nNekopoi Latest : %prefix%command\nNekopoi Search : %prefix%command <query>\nNekopoi Random : %prefix%command random `,
    start: async(killua, m, { text }) => {
        if (text.toLowerCase() === "random") {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nekopoi/random", {}, "apikey"))
            let caption = `Nekopoi Random :\n\n`
            let i = fetch.result
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Synopsis : ${i.synopsis}\n`
            caption += `⭔ Views : ${i.views}\n`
            caption += `⭔ Japanese : ${i.japanese}\n`
            caption += `⭔ Category : ${i.category}\n`
            caption += `⭔ Episode : ${i.episode}\n`
            caption += `⭔ Status : ${i.status}\n`
            caption += `⭔ Aired : ${i.aired}\n`
            caption += `⭔ Producers : ${i.producers}\n`
            caption += `⭔ Genre : ${i.genre}\n`
            caption += `⭔ Duration : ${i.duration}\n`
            caption += `⭔ Score : ${i.score}\n`
            //killua.sendFile(m.from, fetch.result.img, "", m, { caption }) yg gambarnya kena internet positif
            killua.sendText(m.from, caption, m)
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nekopoi/search", { query: text }, "apikey"))
            let caption = `Nekopoi Search :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Link : ${i.link}\n\n`
            }
            //killua.sendFile(m.from, fetch.result[0].img, "", m, { caption }) yg gambarnya kena internet positif
            killua.sendText(m.from, caption, m)
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nekopoi/latest", {}, "apikey"))
            let caption = `Nekopoi Latest :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Link : ${i.link}\n\n`
            }
            //killua.sendFile(m.from, fetch.result[0].img, "", m, { caption }) yg gambarnya kena internet positif
            killua.sendText(m.from, caption, m)
        }
    }
}