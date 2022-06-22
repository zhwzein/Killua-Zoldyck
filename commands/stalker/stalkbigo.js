const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkbigo",
    alias: ["nickbigo"],
    use: "<id>",
    desc: "Bigo Live Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickbigolive", { query: text }, "apikey"))
        let caption = `Bigo Live Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}