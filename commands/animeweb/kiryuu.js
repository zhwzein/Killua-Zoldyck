const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kiryuu",
    alias: ["kiryuusearch"],
    desc: "Kiryuu Search Information",
    type: "animeweb",
    example: `Example : %prefix%command love`,
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/kiryuu", { query: text }, "apikey"))
        let caption = `Kiryuu Search :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.manga_name}\n`
            caption += `⭔ Episode : ${i.manga_eps}\n`
            caption += `⭔ Rate : ${i.manga_rating}\n`
            caption += `⭔ Link : ${i.manga_url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].manga_thumb, "", m, { caption }) //yg gambarnya kena internet positif
    },
    isQuery: true
}