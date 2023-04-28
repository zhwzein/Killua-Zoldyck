const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nagahari",
    alias: ["rahasianagahari"],
    use: "<query>",
    desc: "Cek Primbon Rahasia Nagahari",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/rahasia_nagahari/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Rahasia Nagahari :\n\n`
        let i = fetch.result
        caption += `⭔ Hari Lahir : ${i.hari_lahir}\n`
        caption += `⭔ Tgl Lahir : ${i.tgl_lahir}\n`
        caption += `⭔ Arah Naga Hari : ${i.arah_naga_hari}\n`
        caption += `⭔ Catatan : ${i.catatan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}