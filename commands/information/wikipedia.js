const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wikipedia",
    alias: ["wiki"],
    desc: "Get Information From Wikipedia",
    type: "information",
    example: `Example : %prefix%command biji`,
    exec: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/wikipedia", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Wikipedia Dari ${text} :\n\n`
        let i = fetch.result
        caption += `${i.isi}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}