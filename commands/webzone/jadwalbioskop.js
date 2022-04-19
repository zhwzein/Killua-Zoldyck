const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadwalbioskop",
    alias: ["jadwalbioskop"],
    desc: "Search Jadwal From Jadwalnonton",
    type: "webzone",
    example: `Example : %prefix%command Jakarta`,
    exec: async(killua, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/jadwalbioskop", { kota: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Jadwal Bioskop Kota : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Location : ${i.title}\n`
            caption += `⭔ Thumb : ${i.thumb}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}
