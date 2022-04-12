const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "xvideosearch",
    alias: ["xvideosr"],
    desc: "Search porn videos xvideo",
    type: "search",
    example: `Example : %prefix%command blonde`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/xvideos/search", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
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
