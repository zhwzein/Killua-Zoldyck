const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "iplookup",
    alias: ["ip"],
    use: "<query>",
    desc: "Get IP Information",
    type: "information",
    example: `%prefix%command 192.168.0.0\n\nCek Your IP here : https://api.myip.com/`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/iplookup", { query: text }, "apikey"))
        let caption = `IP Information :\n\n`
        let i = fetch.result
        caption += `⭔ Country : ${i.country}\n`
        caption += `⭔ Region : ${i.region}\n`
        caption += `⭔ City : ${i.city}\n`
        caption += `⭔ Zip : ${i.zip}\n`
        caption += `⭔ Latitude : ${i.latitude}\n`
        caption += `⭔ Longtitude : ${i.longtitude}\n`
        caption += `⭔ Isp : ${i.isp}\n`
        caption += `⭔ Domain : ${i.domain}\n`
        caption += `⭔ Usagetype : ${i.usage_type}\n`
        caption += `⭔ Time_zone : ${i.time_zone}\n`
        caption += `⭔ Local_time : ${i.local_time}\n`
        caption += `⭔ Addres_type : ${i.addres_type}\n`
        caption += `⭔ Category : ${i.category}\n`
        caption += `⭔ Proxy : ${i.proxy}\n`
        caption += `⭔ Provider : ${i.provider}\n`
        caption += `⭔ Weather : ${i.weather}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}