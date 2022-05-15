const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadwalbioskop",
    alias: ["jadwalbioskop"],
    use: "<query>",
    desc: "Search Jadwal From Jadwalnonton",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/jadwalbioskop", { kota: text }, "apikey"))
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
