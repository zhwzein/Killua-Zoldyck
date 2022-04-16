const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nekopoirandom",
    alias: ["randomnekopoi"],
    desc: "Nekopoi Random Information",
    type: "animeweb",
    example: `Example : %prefix%command`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/nekopoi/random", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
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