const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "playstore",
    alias: ["pstore"],
    use: "<query>",
    desc: "Search App From PlayStore",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/playstore", { query: text }, "apikey"))
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
