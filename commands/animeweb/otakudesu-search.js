const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "otakudesu",
    alias: ["otakudes","otakudesu-search","otakudesusearch","odesu"],
    use: "<query>",
    desc: "Search Anime From Otakudesu",
    type: "animeweb",
    example: `\nOtakudesu Search : %prefix%command <query> For Search`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/otakudesu/search", { query: text }, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `${search.length} Found\n\n`
        let array = []
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Url : ${a.url}\n⭔ Genre : ${a.genres}\n⭔ Status : ${a.status}\n⭔ Rating : ${a.rating}\n\n`
            array.push([`Result`, [[`${a.title}`, `.otakudesu-info ${a.url}`]]])
        }
        killua.sendList(m.from, "OtakuDesu Search", caption, config.footer, "Choose", array, m, { previewType: 4 })
    },
    isQuery: true
}