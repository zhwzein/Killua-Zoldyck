const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "doujindesusearch",
    alias: ["doujinsearch"],
    desc: "Doujindesu Search Information",
    type: "animeweb",
    example: `Example : %prefix%command love`,
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/doujindesu/search", { query: text }, "apikey"))
        let caption = `Doujindesu Search :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Score : ${i.score}\n`
            caption += `⭔ Status : ${i.status}\n`
            caption += `⭔ Link : ${i.link}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}