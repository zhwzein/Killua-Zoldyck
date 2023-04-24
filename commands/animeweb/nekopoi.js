const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nekopoi",
    alias: ["nekopoi"],
    use: "<query>",
    desc: "Latest or Random or Search Anime From Nekopoi",
    type: "animeweb",
    example: `\nNekopoi Latest : %prefix%command\nNekopoi Search : %prefix%command <query>\nNekopoi Random : %prefix%command random `,
    start: async (killua, m, { text }) => {
        if (text.toLowerCase() === "random") {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nekopoi/random", {}, "apikey"))
            let caption = `Nekopoi Random :\n\n`
            let i = fetch.result
            caption += `⭔ Id : ${i.id}\n`
            caption += `⭔ Date : ${i.date}\n`
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Description : ${i.description}\n`
            killua.sendFile(m.from, i.image, "", m, { caption })
            // killua.sendText(m.from, caption, m)
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nekopoi/search", { query: text }, "apikey"))
            let caption = `Nekopoi Search :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Id : ${i.id}\n`
                caption += `⭔ Date : ${i.date}\n`
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Description : ${i.description}\n\n`
            }
            killua.sendFile(m.from, fetch.result[0].image, "", m, { caption })
            // killua.sendText(m.from, caption, m)
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nekopoi/latest", {}, "apikey"))
            let caption = `Nekopoi Latest :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Id : ${i.id}\n`
                caption += `⭔ Date : ${i.date}\n`
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Description : ${i.description}\n\n`
            }
            killua.sendFile(m.from, fetch.result[0].image, "", m, { caption })
            // killua.sendText(m.from, caption, m)
        }
    }
}