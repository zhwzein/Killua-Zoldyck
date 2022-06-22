const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalknimo",
    alias: ["nicknimo"],
    use: "<id>",
    desc: "Nimo TV Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nicknimotv", { query: text }, "apikey"))
        let caption = `Nimo TV Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}