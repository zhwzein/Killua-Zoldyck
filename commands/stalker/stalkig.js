const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkig",
    alias: ["instagramstalk", "igstalk"],
    use: "<username>",
    desc: "Instagram Profile Stalker",
    type: "stalker",
    example: `%prefix%command <username>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/ig", { username: text }, "apikey"))
        let caption = `Instagram Profile Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ Fullname : ${i.data.fullname}\n`
        caption += `⭔ Username : ${text.toLowerCase()}\n`
        caption += `⭔ Verified : ${i.data.verified ? "✅" : "❎" }\n`
        caption += `⭔ Status : ${i.data.private ? "Private" : "Public"}\n`
        caption += `⭔ Total Post : ${i.data.timeline}\n`
        caption += `⭔ Video Post : ${i.data.videotimeline}\n`
        caption += `⭔ Followers : ${i.data.follower}\n`
        caption += `⭔ Following : ${i.data.following}\n`
        caption += `⭔ Bio : ${i.data.bio}\n`
        killua.sendFile(m.from, i.profile.high, "", m, { caption })
    },
    isQuery: true
}
