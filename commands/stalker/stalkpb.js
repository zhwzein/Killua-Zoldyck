const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkpb",
    alias: ["nickpb"],
    use: "<username>",
    desc: "Point Blank Stalker",
    type: "stalker",
    example: `%prefix%command <username>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickpb", { query: text }, "apikey"))
        let caption = `Point Blank Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}