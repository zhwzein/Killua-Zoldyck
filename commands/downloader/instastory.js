const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "instastory",
    alias: ["igs","igstory"],
    use: "<url>",
    desc: "Download Story From https://instagram.com",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(killua, m, { text }) => {
        if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram/story", { url:isUrl(text)[0] }, "apikey"))
            killua.sendFile(m.from, fetch.result[0], "", m, { caption: `Download Story From : ${isUrl(text)[0]}` })
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram/story/username", { query: text }, "apikey"))
            for (let i of fetch.result.url) killua.sendFile(m.from, i, "", m, { caption: `Download Story From : ${text}` })
        }
    },
    isQuery: true
}
