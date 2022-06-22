const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "dare",
    alias: ["todd"],
    use: "<query>",
    desc: "Random Truth or Dare",
    type: "entertainment",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/dare", {}, "apikey"))
        killua.sendText(m.from, fetch.result, m)
    },
}