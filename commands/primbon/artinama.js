const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "artinama",
    alias: ["artinama","nama"],
    desc: "Primbon",
    type: "Cek Artinama",
    example: `Example : %prefix%command zein`,
    exec: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/artinama", { text: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Primbon Arti Nama :\n\n`
        let i = fetch.result
        caption += `⭔ Nama : ${i.nama}\n`
        caption += `⭔ Arti : ${i.arti}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}