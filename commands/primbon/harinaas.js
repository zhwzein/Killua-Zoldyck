const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "harinaas",
    alias: ["harinaas"],
    use: "<query>",
    desc: "Cek Primbon Hari Naas",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/harinaas/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Hari Naas :\n\n`
        let i = fetch.result
        caption += `⭔ Hari Lahir : ${i.hari_lahir}\n`
        caption += `⭔ Tgl Lahir : ${i.tgl_lahir}\n`
        caption += `⭔ Hari Naas : ${i.hari_naas}\n`
        caption += `⭔ Catatan : ${i.catatan}\n`
        caption += `⭔ Info : ${i.info}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}