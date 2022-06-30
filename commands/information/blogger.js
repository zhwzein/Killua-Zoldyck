const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "blogger",
    alias: ["blogspot"],
    use: "<query>",
    desc: "Get User Profile Url From Blogspot",
    type: "information",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/blogger", { query: text }, "apikey"))
        killua.sendText(m.from, fetch.result, m)
    },
    isQuery: true
}