const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jagokata",
    alias: ["jkata"],
    use: "<query>",
    desc: "Search Kata from jagokata",
    type: "entertainment",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/jagokata", { query: text }, "apikey"))
        let caption = `Jago Kata Query : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Message : ${i.message}\n\n`
        caption += `⭔ By : ${i.by}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}