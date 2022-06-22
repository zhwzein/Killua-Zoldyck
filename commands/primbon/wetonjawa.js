const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wetonjawa",
    alias: ["wetonjawa"],
    use: "<query>",
    desc: "Cek Primbon Rahasia Nagahari",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/weton_jawa/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Weton Jawa :\n\n`
        let i = fetch.result
        caption += `⭔ Tgl Lahir : ${i.tanggal}\n`
        caption += `⭔ Jumlah Neptu : ${i.jumlah_neptu}\n`
        caption += `⭔ Watak Hari : ${i.watak_hari}\n`
        caption += `⭔ Naga Hari : ${i.naga_hari}\n`
        caption += `⭔ Jam Baik : ${i.jam_baik}\n`
        caption += `⭔ Watak Kelahiran : ${i.watak_kelahiran}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}