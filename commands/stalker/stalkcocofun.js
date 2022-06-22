const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkcocofun",
    alias: ["nickcocofun"],
    use: "<id>",
    desc: "Cocofun Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickcocofun", { query: text }, "apikey"))
        let caption = `Cocofun Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}