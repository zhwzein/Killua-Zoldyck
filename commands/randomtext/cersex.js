let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cersex",
    alias: ["ceritasex"],
    desc: "Generate Random Cerita Sex",
    type: "randomtext",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomtext/cersex2", {}, "apikey"))
        let caption = `Generate Random Cersex :\n\n`
        caption += `⭔ Judul : ${fetch.result.Judul}\n`
        caption += `⭔ Cerita : ${fetch.result.Cerita}\n\n`
        //killua.sendFile(m.from,fetch.result.Thumb, "", m, { caption }) yg gambarnya kena internet positif
        killua.sendText(m.from, caption, m)
    }
}