const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "ytsearch",
    alias: ["yts","ytsr"],
    use: "<query>",
    desc: "Search Video From YouTube",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/ytsearch", { query: text }, "apikey"))
        let caption = `YouTube Search Query : ${toUpper(text)}\n\n`
        let result = fetch.result.filter(v => v.type == "video").map(v => v)
        for (let i of result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Desc : ${i.description}\n`
            caption += `⭔ Type : ${i.type}\n`
            caption += `⭔ ID : ${i.videoId}\n`
            caption += `⭔ Url : ${i.url}\n`
            caption += `⭔ Duration : ${i.timestamp}\n`
            caption += `⭔ Upload At : ${i.ago}\n`
            caption += `⭔ Views : ${i.views}\n`
            caption += `⭔ Author : ${i.author.name}\n`
            caption += `\n─────────────────\n\n`
        }
        killua.sendFile(m.from, result[0].thumbnail, "", m, { caption })
    },
    isQuery: true
}