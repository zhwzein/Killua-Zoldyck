const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkig",
    alias: ["instagramstalk"],
    use: "<username>",
    desc: "Instagram Profile Stalker",
    type: "stalker",
    example: `%prefix%command <username>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/ig", { username: text }, "apikey"))
        let caption = `Instagram Profile Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ Fullname : ${i.fullname}\n`
        caption += `⭔ Username : ${i.username}\n`
        caption += `⭔ Post : ${i.post}\n`
        caption += `⭔ Followers : ${i.followers}\n`
        caption += `⭔ Following : ${i.following}\n`
        caption += `⭔ Bio : ${i.bio}\n`
        killua.sendFile(m.from, i.profile, "", m, { caption })
    },
    isQuery: true
}
