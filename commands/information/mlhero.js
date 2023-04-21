const { fetchUrl, parseResult } = require("../../lib/Function")

module.exports = {
    name: "mlhero",
    alias: ["mlherodetail"],
    use: "<query>",
    desc: "MLBB Hero Detail Information",
    type: "information",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/mlherodetail", { query: text }, "apikey"))
        let caption = await parseResult("MLBB Hero Detail", fetch.result[0])
        killua.sendFile(m.from, fetch.result[0].avatar, "", m, { caption })
    },
    isQuery: true
}