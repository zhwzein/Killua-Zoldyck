const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nhentai",
    alias: ["nhentaisearch"],
    desc: "Nhentai Search Information",
    type: "animeweb",
    example: `Example : %prefix%command 114512`,
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/nhentai", { query: text }, "apikey"))
        let caption = `Nhentai Search :\n\n`
        let i = fetch.result
        caption += `⭔ ID : ${i.id}\n`
        caption += `⭔ English Title : ${i.title.english}\n`
        caption += `⭔ Japanese Title : ${i.title.japanese}\n`
        caption += `⭔ Pretty Title : ${i.title.pretty}\n`
        killua.sendFile(m.from, i.image[0], "", m, { caption })
    },
    isQuery: true
}