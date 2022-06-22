const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkdomino",
    alias: ["nickdomino"],
    use: "<id>",
    desc: "Domino Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickdomino", { query: text }, "apikey"))
        let caption = `Domino Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}