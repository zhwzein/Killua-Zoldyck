const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "otakudesu-info",
    alias: ["otakudesu-detail","odesu-detail","otakudesu-info","odesu-info"],
    use: "<query>",
    desc: "Search Information Anime From Otakudesu",
    type: "animeweb",
    example: `\nOtakudesu Info : %prefix%command <url> For Detail`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/otakudesu/info", { url: isUrl(text)[0] }, "apikey"))
        let search = fetch.result
        let no = 1
        let array = []
        let caption = `*${search?.title?.indonesia}*

⭔ Title : ${search?.title?.anonym}
⭔ Japanese : ${search?.title?.japanese}
⭔ Rating : ${search?.score}
⭔ Producer : ${search?.producer}
⭔ Type : ${search?.type}
⭔ Status : ${search?.status}
⭔ Total Episode : ${search?.total_eps}
⭔ Duration : ${search?.duration}
⭔ Release : ${search?.release}
⭔ Studio : ${search?.studio}
⭔ Genre : ${search?.genre}
⭔ Synopsis :\n${search?.synopsis}`
        let url = search?.link_eps.filter(a => /episode/i.test(a.link))
        for (let a of url) {
            if (!a) return m.reply("Episode Not Found!")
            array.push([`Result`, [[`${a.episode}`, `.otakudesu-download ${a.link}`]]])
        }
        killua.sendList(m.from, "OtakuDesu Info", caption, config.footer, "Choose", array, m, { previewType: 4 })
    },
    isQuery: true
}