const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "artikata",
    alias: ["artikata"],
    use: "<query>",
    desc: "Search Arti Kata",
    type: "entertainment",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/artikata", { query: text }, "apikey"))
        let caption = `Query : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Kata : ${i.kata}\n`
        caption += `⭔ Arti : ${i.arti}\n`
        caption += `⭔ Contoh : ${i.contoh[0]}\n\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}