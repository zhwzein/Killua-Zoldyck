const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "artimimpi",
    alias: ["artimimpi","mimpi"],
    desc: "Cek Arti Mimpi",
    type: "primbon",
    example: `Example : %prefix%command Mandi`,
    exec: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/artimimpi", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Primbon Arti Mimpi :\n\n`
        let i = fetch.result
        caption += `⭔ Mimpi : ${i.mimpi}\n`
        caption += `⭔ Arti : ${i.arti}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}