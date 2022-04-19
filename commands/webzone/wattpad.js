const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wattpad",
    alias: ["wattpad"],
    desc: "Search story From wattpad",
    type: "webzone",
    example: `Example : %prefix%command love`,
    exec: async(killua, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/wattpad", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Wattpad Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Judul : ${i.judul}\n`
            caption += `⭔ Dibaca : ${i.dibaca}\n`
            caption += `⭔ Divote : ${i.divote}\n`
            caption += `⭔ Bab : ${i.bab}\n`
            caption += `⭔ Waktu : ${i.waktu}\n`
            caption += `⭔ Url : ${i.url}\n`
            caption += `⭔ Thumb : ${i.thumb}\n`
            caption += `⭔ Description : ${i.description}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}
