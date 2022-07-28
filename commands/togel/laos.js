let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "laos",
    alias: ["tglaos"],
    desc: "Togel Result Information",
    type: "togel",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/togel/laos", {}, "apikey"))
        let caption = `Togel Result Information :\n\n`
        let i = fetch.result
        caption += `⭔ Current Draw : ${i.currentDraw}\n`
        caption += `⭔ First Prize : ${i.firstPrize}\n`
        caption += `⭔ Second Prize : ${i.secondPrize}\n\n`
        caption += `⭔ Third Prize : ${i.thirdPrize}\n`
        killua.sendText(m.from, caption, m)
    }
}