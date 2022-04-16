const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nekopoi",
    alias: ["nekopoilatest"],
    desc: "Nekopoi Latest Information",
    type: "animeweb",
    example: `Example : %prefix%command`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/nekopoi/latest", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Nekopoi Latest :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Link : ${i.link}\n\n`
        }
        //killua.sendFile(m.from, fetch.result[0].img, "", m, { caption }) yg gambarnya kena internet positif
        killua.sendText(m.from, caption, m)
    },
}