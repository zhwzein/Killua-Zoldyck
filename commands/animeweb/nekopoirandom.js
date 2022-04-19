const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nekopoirandom",
    alias: ["randomnekopoi"],
    desc: "Random Nekopoi Information",
    type: "animeweb",
    example: `Example : %prefix%command`,
    exec: async(killua, m, {}) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/nekopoi/random", {}, "apikey"))
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
    },
}