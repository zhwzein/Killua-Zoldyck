const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkmladventure",
    alias: ["nickkmladventure"],
    use: "<id>",
    desc: "Mobile Legends Adventure Stalker",
    type: "stalker",
    example: `%prefix%command ID|SERVER`,
    start: async(killua, m, { text, command, prefix }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} ID|SERVER`)
        let text1 = text.split("|")[0]
        let text2 = text.split("|")[1]
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickkmladventure", { query: text1, query2: text2 }, "apikey"))
        let caption = `Mobile Legends Adventure Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ ZoneId : ${i.zoneId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}