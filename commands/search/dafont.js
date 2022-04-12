let { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "dafont",
    alias: ["dafontdl"],
    desc: "Search & Download Font From https://dafont.com",
    type: "search",
    example: "No Query Title, %prefix%command metalic",
    exec: async(killua, m, { command, text, prefix }) => {
        if (!text) return m.reply(`Example : ${prefix + command} bold`)
        let fetch = await fetchUrl(global.api("zenz", "/searching/dafontsearch", { query: text }, "apikey"))
        if (fetch.result.length == 0) return m.reply(`No Results Found`)
        for (let i = 0; i < (fetch.result.length < 6 ? fetch.result.length : 6); i++) {
            let download = await fetchUrl(global.api("zenz", "/downloader/dafont", { url: fetch.result[i].link }, "apikey"))
            killua.sendFile(m.from, download.result.url, download.judul, m)
        }
    },
    isQuery: true
}