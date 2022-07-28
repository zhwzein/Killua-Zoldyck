const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalktiktok",
    alias: ["tiktokstalk"],
    use: "<username>",
    desc: "TikTok Profile Stalker",
    type: "stalker",
    example: `%prefix%command <username>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/tiktok", { username: text }, "apikey"))
        let caption = `TikTok Profile Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ Name : ${i.name}\n`
        caption += `⭔ Username : ${i.username}\n`
        caption += `⭔ Followers : ${i.followers}\n`
        caption += `⭔ Following : ${i.following}\n`
        caption += `⭔ Description : ${i.description}\n`
        killua.sendFile(m.from, i.profile, "", m, { caption })
    },
    isQuery: true
}