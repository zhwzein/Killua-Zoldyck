const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wagroup",
    alias: ["wagroup"],
    use: "<query>",
    desc: "Search WhatsApp Group",
    type: "search",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/wagroup", { query: text }, "apikey"))
        let caption = `WA Group Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Name : ${i.nama}\n`
            caption += `⭔ Link : ${i.link}\n\n`
        }
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
