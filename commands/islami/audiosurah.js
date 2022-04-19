const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "audiosurah",
    alias: ["audiosurah"],
    desc: "Download Audio From audiosurah",
    type: "islami",
    example: "Example : %prefix%command 1",
    exec: async(killua, m, { text }) => {
        global.mess("wait", m)
        killua.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${text}`, {}, "apikey"), "", m)
    },
    isQuery: true
}