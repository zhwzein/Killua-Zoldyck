const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkaov",
    alias: ["nickaov"],
    use: "<id>",
    desc: "Arena Of Valor Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickaov", { query: text }, "apikey"))
        let caption = `Arena Of Valor Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}