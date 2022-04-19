const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cekapi",
    alias: ["apikey"],
    desc: "Apikey Checker From Zenzapis.xyz",
    type: "stalker",
    example: `Example : %prefix%command APIKEY`,
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        try {
            let fetch = await fetchUrl(global.api("zenz", "/api/cekapi", {apikey: text}))
            let caption = `Apikey Checker :\n\n`
            let i = fetch.message
            caption += `⭔ Id : ${i.id}\n`
            caption += `⭔ Created : ${i.created}\n`
            caption += `⭔ Updated : ${i.updated}\n`
            caption += `⭔ First Name : ${i.firstname}\n`
            caption += `⭔ Last Name : ${i.lastname}\n`
            caption += `⭔ Email : ${i.email}\n`
            caption += `⭔ Username : ${i.username}\n`
            caption += `⭔ ApiKey : ${i.apiKey}\n`
            caption += `⭔ Todayhit : ${i.today_hit}\n`
            caption += `⭔ Totalhit : ${i.total_hit}\n`
            caption += `⭔ Status : ${i.status}\n`
            caption += `⭔ Premium : ${i.premium}\n`
            caption += `⭔ Expired : ${i.premium_expired}\n`
            caption += `⭔ Active : ${i.active}\n`
            caption += `⭔ Location : ${i.location}\n`
            caption += `⭔ Biodata : ${i.biodata}\n`
            killua.sendFile(m.from, i.profile_image, "", m, { caption })
        } catch (e) {
            m.reply('Error / Apikey Not Valid')
        }
    },
    isQuery: true
}