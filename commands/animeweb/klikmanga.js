const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "klikmanga",
    alias: ["klikmangasearch"],
    desc: "Klikmanga Search Information",
    type: "animeweb",
    example: `Example : %prefix%command love`,
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/klikmanga", { query: text }, "apikey"))
        let caption = `Klikmanga Search :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.manga_name}\n`
            caption += `⭔ Episode : ${i.manga_eps}\n`
            caption += `⭔ Author : ${i.manga_author}\n`
            caption += `⭔ Genre : ${i.manga_genre}\n`
            caption += `⭔ Status : ${i.manga_status}\n`
            caption += `⭔ Release : ${i.manga_release}\n`
            caption += `⭔ Desc : ${i.manga_desc}\n`
            caption += `⭔ Link : ${i.manga_url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].manga_thumb, "", m, { caption })
    },
    isQuery: true
}