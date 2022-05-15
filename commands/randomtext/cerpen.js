let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cerpen",
    alias: ["ceritapendek"],
    desc: "Generate Random Cerita Pendek",
    type: "randomtext",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomtext/cerpen", {}, "apikey"))
        let caption = `Generate Random Cerpen :\n\n`
        caption += `⭔ Judul : ${fetch.result.Judul}\n`
        caption += `⭔ Penulis : ${fetch.result.Penulis}\n\n`
        caption += `⭔ Cerita : ${fetch.result.cerita}\n\n`
        caption += `⭔ Sumber : ${fetch.result.sumber}\n`
        killua.sendText(m.from, caption, m)
    }
}