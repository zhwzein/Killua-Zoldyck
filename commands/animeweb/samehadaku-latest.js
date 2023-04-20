const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "samehadaku-latest",
    alias: ["samehadakulatest"],
    desc: "Search Anime Latest From Samehadaku",
    type: "animeweb",
    example: `\nSamehadaku Latest : %prefix%command For Search Latest Anime`,
    start: async(killua, m, { text }) => {
        if (text) {
        let fetch = await fetchUrl(global.api("zenz", `/animeweb/samehadaku/latest/${text}`, {}, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `Page ${text}\n${search.length} Found\n\n`
        let array = []
        let next_page = Number(text) + 1
        array.push([`Next Page ${next_page}`, [[`Next Page ${next_page}`, `.samehadaku-latest ${next_page}`]]])
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Total Episode : ${a.eps}\n⭔ Author : ${a.author}\n⭔ Release : ${a.release_on}\n⭔ Link : ${a.link}\n\n`
            array.push([a.title, [[a.title, `.samehadaku-download ${a.link}`]]])
        }
        killua.sendList(m.from, "Samehadaku Latest", caption, config.footer, "Choose", array, m, { previewType: 4 })
        } else {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/samehadaku/latest/1", {}, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `Page 1\n${search.length} Found\n\n`
        let array = []
        array.push([`Next Page 2`, [[`Next Page 2`, `.samehadaku-latest 2`]]])
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Total Episode : ${a.eps}\n⭔ Author : ${a.author}\n⭔ Release : ${a.release_on}\n⭔ Link : ${a.link}\n\n`
            array.push([a.title, [[a.title, `.samehadaku-download ${a.link}`]]])
        }
        killua.sendList(m.from, "Samehadaku Latest", caption, config.footer, "Choose", array, m, { previewType: 4 })
        }
    }
}