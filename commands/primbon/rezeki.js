const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "rezeki",
    alias: ["rezekiweton"],
    desc: "Cek Hari Rezeki Menurut Weton",
    type: "primbon",
    example: `Example : %prefix%command 11 06 2007`,
    exec: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/api/rejekiweton/${a}/${b}/${c}`, {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Primbon Hari Rezeki :\n\n`
        let i = fetch.result.message
        caption += `⭔ Catatan : ${i.penjelasan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}