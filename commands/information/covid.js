const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "covid",
    alias: ["covidworld"],
    desc: "Covid-19 Information",
    type: "information",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/covidworld", {}, "apikey"))
        let caption = `Covid-19 Information :\n\n`
        let i = fetch.result
        caption += `⭔ TotalCases : ${i.totalCases}\n`
        caption += `⭔ Recovered : ${i.recovered}\n`
        caption += `⭔ Deaths : ${i.deaths}\n`
        caption += `⭔ ActiveCases : ${i.activeCases}\n`
        caption += `⭔ ClosedCases : ${i.closedCases}\n`
        caption += `⭔ LastUpdate : ${i.lastUpdate}\n`
        killua.sendText(m.from, caption, m)
    }
}