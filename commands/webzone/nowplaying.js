const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nowplaying",
    alias: ["nowplayingbioskop"],
    desc: "Search Jadwal From Jadwalnonton",
    type: "webzone",
    example: `Example : %prefix%command`,
    exec: async(killua, m, {}) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/nowplayingbioskop", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Now Bioskop Playing :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Thumb : ${i.img}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].img, "", m, { caption })
    },
}
