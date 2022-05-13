const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kbbi",
    alias: ["kbbi"],
    desc: "Kamus Besar Bahasa Indonesia",
    type: "information",
    example: `Example : %prefix%command biji`,
    exec: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/kbbi", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Arti Kbbi Dari ${toUpper(text)} :\n\n`
        let i = fetch.result
        caption += `${i.arti}`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}