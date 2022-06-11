const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "rezeki",
    alias: ["rezekiweton"],
    use: "<query>",
    desc: "Cek Hari Rezeki Menurut Weton",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/rejekiweton/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Hari Rezeki :\n\n`
        let i = fetch.result.message
        caption += `⭔ Catatan : ${i.penjelasan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}