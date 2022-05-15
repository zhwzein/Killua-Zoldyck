const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nowplaying",
    alias: ["nowplayingbioskop"],
    desc: "Search Jadwal From Jadwalnonton",
    type: "webzone",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/nowplayingbioskop", {}, "apikey"))
        let caption = `Now Bioskop Playing :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Thumb : ${i.img}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].img, "", m, { caption })
    },
}
