const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cekapi",
    alias: ["apikey"],
    desc: "Apikey Checker From Zenzapis.xyz",
    type: "stalker",
    example: `Example : %prefix%command`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/api/cekapi", {}, "apikey"))
        if (fetch.length == 0) return global.mess("error", m)
        let caption = `Apikey Checker :\n\n`
        let i = fetch.message
        caption += `⭔ Created : ${i.created}\n`
        caption += `⭔ Updated : ${i.updated}\n`
        caption += `⭔ Username : ${i.username}\n`
        caption += `⭔ Status : ${i.status}\n`
        caption += `⭔ ApiKey : ${i.apiKey}\n`
        caption += `⭔ Todayhit : ${i.today_hit}\n`
        killua.sendText(m.from, caption, m)
    },
}