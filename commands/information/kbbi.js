const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kbbi",
    alias: ["kbbi"],
    use: "<query>",
    desc: "Kamus Besar Bahasa Indonesia",
    type: "information",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/kbbi", { query: text }, "apikey"))
        let caption = `Arti Kbbi Dari ${toUpper(text)} :\n\n`
        let i = fetch.result
        caption += `${i.arti}`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}