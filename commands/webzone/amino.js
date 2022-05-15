const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "amino",
    alias: ["aminocommunity"],
    use: "<query>",
    desc: "Search community from amino",
    type: "webzone",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/webzone/amino", { query: text }, "apikey"))
        let caption = `Amino Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Community Name : ${i.community}\n`
            caption += `⭔ Community Desc : ${i.community_desc}\n`
            caption += `⭔ Community Link : ${i.community_link}\n`
            caption += `⭔ Community Thumb : ${i.community_thumb}\n\n`
        }
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
