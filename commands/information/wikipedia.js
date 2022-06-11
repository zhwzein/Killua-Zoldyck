const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wikipedia",
    alias: ["wiki"],
    use: "<query>",
    desc: "Get Information From Wikipedia",
    type: "information",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/wikipedia", { query: text }, "apikey"))
        let caption = `Wikipedia Dari ${text} :\n\n`
        let i = fetch.result
        caption += `${i.isi}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}