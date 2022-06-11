const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkff",
    alias: ["nickff"],
    use: "<query>",
    desc: "Free Fire Stalker",
    type: "stalker",
    example: `%prefix%command 552992060`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickff", { query: text }, "apikey"))
        let caption = `Free Fire Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}