const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "samehadaku-movielist",
    alias: ["samehadakumovielist"],
    desc: "Search Movie List From Samehadaku",
    type: "animeweb",
    example: `\nSamehadaku Movie List : %prefix%command For Search Movie List`,
    start: async(killua, m, { text }) => {
        if (text) {
        let fetch = await fetchUrl(global.api("zenz", `/animeweb/samehadaku/movielist/${text}`, {}, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `Page ${text}\n${search.length} Found\n\n`
        let array = []
        let next_page = Number(text) + 1
        array.push([`Next Page ${next_page}`, [[`Next Page ${next_page}`, `.samehadaku-movielist ${next_page}`]]])
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Status : ${a.status}\n⭔ Type : ${a.type}\n⭔ Score : ${a.score}\n⭔ Link : ${a.link}\n\n`
            array.push([a.title, [[a.title, `.samehadaku-detail ${a.link}`]]])
        }
        killua.sendList(m.from, "Samehadaku Movie List", caption, config.footer, "Choose", array, m, { previewType: 4 })
        } else {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/samehadaku/movielist/1", {}, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `Page 1\n${search.length} Found\n\n`
        let array = []
        array.push([`Next Page 2`, [[`Next Page 2`, `.samehadaku-movielist 2`]]])
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Status : ${a.status}\n⭔ Type : ${a.type}\n⭔ Score : ${a.score}\n⭔ Link : ${a.link}\n\n`
            array.push([a.title, [[a.title, `.samehadaku-detail ${a.link}`]]])
        }
        killua.sendList(m.from, "Samehadaku Movie List", caption, config.footer, "Choose", array, m, { previewType: 4 })
        }
    }
}