const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkpb",
    alias: ["nickpb"],
    desc: "Point Blank Stalker",
    type: "stalker",
    example: `Example : %prefix%command riio46`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/api/nickpb", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Point Blank Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}