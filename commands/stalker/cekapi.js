const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cekapi",
    alias: ["apikey","cekapikey"],
    use: "<query>",
    desc: "Apikey Checker From Zenzapis.xyz",
    type: "stalker",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        try {
            let fetch = await fetchUrl(global.api("zenz", "/user/cekapi", {apikey: text}))
            let caption = `Apikey Checker :\n\n`
            let i = fetch.message
            caption += `⭔ Id : ${i.id}\n`
            caption += `⭔ Created : ${i.created}\n`
            caption += `⭔ Updated : ${i.updated}\n`
            caption += `⭔ Username : ${i.username}\n`
            caption += `⭔ ApiKey : ${i.apikey}\n`
            caption += `⭔ Today hit : ${i.today_hit}\n`
            caption += `⭔ Total hit : ${i.total_hit}\n`
            caption += `⭔ Status : ${i.status}\n`
            caption += `⭔ Premium : ${i.premium}\n`
            caption += `⭔ Expired : ${i.premium_expired}\n`
            caption += `⭔ Active : ${i.active}\n`
            killua.sendFile(m.from, i.profile_image, "", m, { caption })
        } catch (e) {
            m.reply('Error / Apikey Not Valid')
        }
    },
    isQuery: true
}
