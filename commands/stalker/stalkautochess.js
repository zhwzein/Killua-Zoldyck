const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkautochess",
    alias: ["nickautochess"],
    use: "<id>",
    desc: "Auto Chess Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickautochess", { query: text }, "apikey"))
        let caption = `Auto Chess Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}