const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kisahnabi",
    alias: ["nabi","kisahmuslim"],
    desc: "The Story of the Prophet",
    type: "islami",
    example: "Example : %prefix%command <nabi>\n%prefix%command Muhammad",
    exec: async(killua, m, { text }) => {
        if (text) {
            title = text.toLowerCase()
            let fetch = await fetchUrl(global.api("zenz", `/islami/kisahnabi/${title}`, {}, "apikey"))
            let teks = `⭔ Nama : ${fetch.result.name}\n⭔ Lahir : ${fetch.result.lahir}\n⭔ Umur : ${fetch.result.age}\n⭔ Lokasi : ${fetch.result.place}\n⭔ Kisah :\n${fetch.result.story}`
            killua.sendFile(m.from, fetch.result.image, "", m, { caption: teks })
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/islami/kisahmuslim", {}, "apikey"))
            let teks = `⭔ Judul : ${fetch.result.Judul}\n⭔ Kisah :\n${fetch.result.Cerita}`
            killua.sendFile(m.from, fetch.result.Thumb, "", m, { caption: teks })
        }
    }
}