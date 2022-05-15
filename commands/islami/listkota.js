const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "listkota",
    alias: ["kota"],
    desc: "List Of Cities throughout Indonesia",
    type: "islami",
    start: async(killua, m) => {
        let fetch = await fetchUrl(global.api("zenz", "/islami/listkota", {}, "apikey"))
        let teks = `List Kota Di seluruh Indonesia\n\n`
        for (let i of fetch.result) {
            teks += `⭔ Provinsi : ${i.provinsi}\n`
            teks += `⭔ Kota : \n${i.kota.join("\n")}\n`
            teks += `\n`
        }
        killua.sendText(m.from, teks, m)
    }
}