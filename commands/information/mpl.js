const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "mpl",
    alias: ["mlbbmpl"],
    desc: "MLBB Mobile Premier League Information",
    type: "information",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/mpl", {}, "apikey"))
        let caption = `MPL Information :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Tanggal : ${i.tanggal}\n`
            caption += `⭔ Week : ${i.week}\n`
            caption += `⭔ Jam : ${i.jam}\n`
            caption += `⭔ Match : ${i.match}\n`
            caption += `⭔ Score : ${i.score}\n`
            caption += `⭔ Replay : ${i.replay}\n`
        }
        killua.sendText(m.from, caption, m)
    }
}