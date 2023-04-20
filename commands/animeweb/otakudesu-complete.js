const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "otakudesu-complete",
    alias: ["odesucomplete","otakudesucomplete"],
    desc: "Search Anime Complete From Otakudesu",
    type: "animeweb",
    example: `\nOtakudesu Search : %prefix%command For Search Complete Anime`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/otakudesu/complete", {}, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `${search.length} Found\n\n`
        let array = []
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Url : ${a.url}\n⭔ Episode : ${a.episode}\n⭔ Rating : ${a.upAtD}\n⭔ Update : ${a.upAtT}\n\n`
            array.push([`Result`, [[`${a.title}`, `.otakudesu-info ${a.url}`]]])
        }
        killua.sendList(m.from, "OtakuDesu Complete", caption, config.footer, "Choose", array, m, { previewType: 4 })
    }
}