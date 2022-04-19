const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "doujindesu",
    alias: ["doujinlatest"],
    desc: "Latest Doujindesu Information",
    type: "animeweb",
    example: `Example : %prefix%command`,
    exec: async(killua, m, {}) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/doujindesu/latest", {}, "apikey"))
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