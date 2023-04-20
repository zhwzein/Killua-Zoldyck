const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "samehadaku",
    alias: ["samehadaku","samehadaku-search","samehadakusearch"],
    use: "<query>",
    desc: "Search Anime From Samehadaku",
    type: "animeweb",
    example: `\nSamehadaku Search : %prefix%command <query> For Search`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/samehadaku/search", { query: text }, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `${search.length} Found\n\n`
        let array = []
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Status : ${a.status}\n⭔ Type : ${a.type}\n⭔ Score : ${a.score}\n⭔ Link : ${a.link}\n\n`
            array.push([a.title, [[a.title, `.samehadaku-info ${a.link}`]]])
        }
        killua.sendList(m.from, "Samehadaku Search", caption, config.footer, "Choose", array, m, { previewType: 4 })
    },
    isQuery: true
}