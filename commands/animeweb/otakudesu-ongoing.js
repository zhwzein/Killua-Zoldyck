const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "otakudesu-ongoing",
    alias: ["odesuongoing","otakudesuongoing"],
    desc: "Search Anime Ongoing From Otakudesu",
    type: "animeweb",
    example: `\nOtakudesu Search : %prefix%command For Search Ongoing Anime`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/otakudesu/ongoing", {}, "apikey"))
        let search = fetch.result
        if (search.length == 0) return m.reply("Result not found")
        let no = 1
        let caption = `${search.length} Found\n\n`
        let array = []
        for (let a of search) {
            caption += `${no++}\n⭔ Title : ${a.title}\n⭔ Url : ${a.url}\n⭔ Episode : ${a.episode}\n⭔ Update : ${a.upAtD + a.upAtT}\n\n`
            array.push([`Result`, [[`${a.title}`, `.otakudesu-info ${a.url}`]]])
        }
        killua.sendList(m.from, "OtakuDesu ongoing", caption, config.footer, "Choose", array, m, { previewType: 4 })
    }
}