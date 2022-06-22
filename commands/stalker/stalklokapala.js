const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalklokapala",
    alias: ["nicklokapala"],
    use: "<id>",
    desc: "LokaPala Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nicklokapala", { query: text }, "apikey"))
        let caption = `LokaPala Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}