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
            let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram/story/v2", { url:isUrl(text)[0] }, "apikey"))
            killua.sendFile(m.from, fetch.result[0], "", m, { caption: `Download Story From : ${isUrl(text)[0]}` })
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/instagram/story", { username: text }, "apikey"))
            for (let i of fetch.result.url_list) killua.sendFile(m.from, i, "", m, { caption: `Download Story From : ${text}` })
        }
    },
    isQuery: true
}
