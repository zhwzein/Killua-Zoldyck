const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "memancing",
    alias: ["mancingikan"],
    use: "<query>",
    desc: "Cek Primbon Memancing Ikan",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/memancing_ikan/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Memancing Ikan :\n\n`
        let i = fetch.result
        caption += `⭔ Tanggal Mancing : ${i.tgl_mancing}\n`
        caption += `⭔ Result : ${i.result}\n`
        caption += `⭔ Catatan : ${i.catatan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}