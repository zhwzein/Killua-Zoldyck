const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "artinama",
    alias: ["artinama","nama"],
    use: "<query>",
    desc: "Cek Artinama",
    type: "primbon",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/primbon/artinama", { text: text }, "apikey"))
        let caption = `Primbon Arti Nama :\n\n`
        let i = fetch.result
        caption += `⭔ Nama : ${i.nama}\n`
        caption += `⭔ Arti : ${i.arti}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}