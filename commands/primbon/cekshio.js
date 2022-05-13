const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cekshio",
    alias: ["shio"],
    desc: "Cek Arti Shio",
    type: "primbon",
    example: `List Type :\n\n${type().join("\n")}\n\nExample : %prefix%command ayam`,
    exec: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/shio", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Primbon Arti Shio :\n\n`
        let i = fetch.result
        caption += `⭔ Catatan : ${i.result}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}

function type() {
    return [
        "Tikus",
        "Kerbau",
        "Macan",
        "Kelinci",
        "Naga",
        "Ular",
        "Kuda",
        "Kambing",
        "Monyet",
        "Ayam",
        "Anjing",
        "Babi"
    ]
}