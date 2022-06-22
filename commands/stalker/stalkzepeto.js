const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkzepeto",
    alias: ["nickzepeto"],
    use: "<id>",
    desc: "Zepeto Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickzepeto", { query: text }, "apikey"))
        let caption = `Zepeto Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}