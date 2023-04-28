const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "artimimpi",
    alias: ["artimimpi","mimpi"],
    use: "<query>",
    desc: "Cek Arti Mimpi",
    type: "primbon",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/primbon/artimimpi", { query: text }, "apikey"))
        let caption = `Primbon Arti Mimpi :\n\n`
        let i = fetch.result
        caption += `⭔ Mimpi : ${i.mimpi}\n`
        caption += `⭔ Arti : ${i.arti}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}