const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "doujindesu",
    alias: ["doujinlatest"],
    desc: "Doujindesu Latest Information",
    type: "animeweb",
    example: `Example : %prefix%command`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/doujindesu/latest", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Doujindesu Latest :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Score : ${i.score}\n`
            caption += `⭔ Status : ${i.status}\n`
            caption += `⭔ Link : ${i.link}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
}