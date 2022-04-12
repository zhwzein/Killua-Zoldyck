const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kisahnabi",
    alias: ["nabi"],
    desc: "The Story of the Prophet",
    type: "islami",
    example: "Example : %prefix%command <nabi>\n%prefix%command Muhammad",
    exec: async(killua, m, { text }) => {
        title = text.toLowerCase()
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", `/islami/kisahnabi/${title}`, {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `⭔ Nama : ${fetch.result.name}\n⭔ Lahir : ${fetch.result.lahir}\n⭔ Umur : ${fetch.result.age}\n⭔ Lokasi : ${fetch.result.place}\n⭔ Kisah :\n${fetch.result.story}`
        killua.sendFile(m.from, fetch.result.image, "", m, { caption: teks })
    },
    isQuery: true
}