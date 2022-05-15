const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "audioayat",
    alias: ["ayataudio"],
    use: "<query>",
    desc: "Download Audio From audioayat",
    type: "islami",
    example: "%prefix%command nomor surah|nomor ayat",
    start: async(killua, m, { text, prefix, command }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} 1|1`)
        let [a, b] = text.split`|`
        killua.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${a}/${b}`, {}, "apikey"), "", m)
    },
    isQuery: true
}