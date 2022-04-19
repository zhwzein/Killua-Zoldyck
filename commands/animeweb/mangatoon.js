const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "mangatoon",
    alias: ["mangatoon"],
    desc: "Mangatoon Search Information",
    type: "animeweb",
    example: `Example : %prefix%command love`,
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/mangatoon", { query: text }, "apikey"))
        let caption = `Mangatoon Search :\n\n`
        let i = fetch.result
        caption += `⭔ Judul : ${i.judul}\n`
        caption += `⭔ Genre : ${i.genre}\n`
        caption += `⭔ Author : ${i.Author}\n`
        caption += `⭔ Link : ${i.Link}\n`
        killua.sendFile(m.from, i.thumb, "", m, { caption })
    },
    isQuery: true
}