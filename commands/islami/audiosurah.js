const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "audiosurah",
    alias: ["audiosurah"],
    desc: "Download Audio From audiosurah",
    type: "islami",
    example: "Example : %prefix%command 1",
    exec: async(killua, m, { text, args, prefix, command }) => {
        let [a, b] = args
        global.mess("wait", m)
        killua.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${a}`, {}, "apikey"), "", m)
    },
    isQuery: true
}