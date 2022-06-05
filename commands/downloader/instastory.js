const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "instastory",
    alias: ["igs","igstory"],
    use: "<url>",
    desc: "Download Story From https://instagram.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/instastory", { url:isUrl(text)[0] }, "apikey"))
            killua.sendFile(m.from, fetch.result.media[0].url, "", m, { caption: `Download Story From : ${isUrl(text)[0]}\n\nType: ${fetch.result.type}` })
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/igstory", { username: text }, "apikey"))
            for (let i of fetch.result) killua.sendFile(m.from, i.url, "", m, { caption: `Download Story From : ${text}\n\nType: ${i.type}` })
        }
    },
    isQuery: true
}