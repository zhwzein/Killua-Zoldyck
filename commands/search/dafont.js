let { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "dafont",
    alias: ["dafontdl"],
    use: "<query>",
    desc: "Search & Download Font From https://dafont.com",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { command, text, prefix }) => {
        if (!text) return m.reply(`Example : ${prefix + command} bold`)
        let fetch = await fetchUrl(global.api("zenz", "/searching/dafontsearch", { query: text }, "apikey"))
        for (let i = 0; i < (fetch.result.length < 6 ? fetch.result.length : 6); i++) {
            let download = await fetchUrl(global.api("zenz", "/downloader/dafont", { url: fetch.result[i].link }, "apikey"))
            killua.sendFile(m.from, download.result.url, download.judul, m)
        }
    },
    isQuery: true
}