const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "usaha",
    alias: ["usahabisnis"],
    use: "<query>",
    desc: "Cek Primbon Usaha Bisnis",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/usahabisnis/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Usaha Bisnis :\n\n`
        let i = fetch.result
        caption += `⭔ Hari Lahir : ${i.hari_lahir}\n`
        caption += `⭔ Usaha : ${i.usaha}\n`
        caption += `⭔ Catatan : ${i.message}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}