const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "playstore",
    alias: ["pstore"],
    desc: "Search App From PlayStore",
    type: "webzone",
    example: `No Query Title, Example : %prefix%command Bstation`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        if (!text) return m.reply(`No Query Title`)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/playstore", { query: text }, "apikey"))
        if (fetch.result.length == 0) return m.reply('No Results Found')
        let caption = `PlayStore Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Name : ${i.name}\n`
            caption += `⭔ Url App : ${i.link}\n`
            caption += `⭔ Developer : ${i.developer}\n`
            caption += `⭔ Detail Dev : ${i.link_dev}\n`
            caption += `\n─────────────────\n\n`
        }
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
