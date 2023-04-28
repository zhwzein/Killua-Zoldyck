const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "penyakit",
    alias: ["potensipenyakit"],
    use: "<query>",
    desc: "Cek Primbon Potensi Penyakit",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/potensipenyakit/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Potensi Penyakit :\n\n`
        let i = fetch.result
        caption += `⭔ Analisa : ${i.analisa}\n`
        caption += `⭔ Sektor : ${i.sektor}\n`
        caption += `⭔ Elemen : ${i.elemen}\n`
        caption += `⭔ Catatan : ${i.catatan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}