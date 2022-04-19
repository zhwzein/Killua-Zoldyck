const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "audioayat",
    alias: ["ayataudio"],
    desc: "Download Audio From audioayat",
    type: "islami",
    example: "Example : %prefix%command 1 1",
    exec: async(killua, m, { text, prefix, command }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} 1|1`)
        let [a, b] = text.split`|`
        global.mess("wait", m)
        killua.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${a}/${b}`, {}, "apikey"), "", m)
    },
    isQuery: true
}