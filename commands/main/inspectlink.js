const moment = require("moment-timezone")

module.exports = {
    name: "inspect",
    alias: ["inspeksi"],
    use: "<url>",
    desc: "Get Detail Group From Link",
    type: "main",
    example: "Example : %prefix%command <url>",
    start: async(killua, m, { text }) => {
        let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
        let [, code] = text.match(linkRegex) || {}
        if (!code) return m.reply("Link Invalid")
        let res = await killua.groupQueryInvite(code)
        if (!res) return m.reply(String(res))
        let teks = `
    「 Group Link Inspector 」

⬡ *ID :* ${res.id}
⬡ *Subject :* ${res.subject}
⬡ *Subject Update By :* @${res.subjectOwner.split("@")[0]}
⬡ *Subject Update At :* ${moment(res.subjectTime * 1000).tz(config.timezone).format("DD-MM-YYYY, HH:MM:SS")}
⬡ *Creator :* @${res.owner ? res.owner.split("@")[0] : res.id.split("-")[0]}
⬡ *Create At :* ${moment(res.creation * 1000).tz(config.timezone).format("DD-MM-YYYY, HH:MM:SS")}
⬡ *Members Length :* ${res.size}
⬡ *Desc Update By :* ${res.descOwner ? "@" + res.descOwner.split("@")[0] : ""}
⬡ *Desc Update At :* ${moment(res.descTime * 1000).tz(config.timezone).format("DD-MM-YYYY, HH:MM:SS")}
⬡ *Desc ID :* ${res.descId}
⬡ *Description :*\n${res.desc ? res.desc : "No Description"}
⬡ *Friends Who Are Known to Join :*\n${res.participants ? res.participants.map((user, i) => ++i + ". @" + user.jid.split("@")[0]).join("\n").trim() : "Not Found"}
        `
        let pp
        try {
            pp = await killua.profilePictureUrl(res.id, "image")
        } catch {
            pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
        }
        killua.sendFile(m.from, pp, "", m, { caption: teks, mentions: await killua.parseMention(teks) })
    },
    isQuery: true
}
