const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "xvideosearch",
    alias: ["xvideosr"],
    use: "<query>",
    desc: "Search porn videos xvideo",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/xvideos", { query: text }, "apikey"))
        let caption = `Xnxx Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Duration : ${i.duration}\n`
            caption += `⭔ Thumb : ${i.thumb}\n`
            caption += `⭔ Url : ${i.url}\n\n`
        }
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
