const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "simi",
    alias: ["sim","simisimi"],
    use: "<query>",
    desc: "Get Respond From Simi Simi",
    type: "entertainment",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        try {
            let fetch = await fetchUrl(global.api("zenz", "/entertainment/simisimi" || "/entertainment/simisimi/v2", { text: text }, "apikey"))
            result = fetch.result.message
            killua.sendText(m.from, result, m)
        } catch {
            m.reply("Error Coba Ulangi")
        }
    },
    isQuery: true
}