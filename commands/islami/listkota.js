const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "listkota",
    alias: ["kota"],
    desc: "List Of Cities throughout Indonesia",
    type: "islami",
    exec: async(killua, m) => {
        let fetch = await fetchUrl(global.api("zenz", "/islami/listkota", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `List Kota Di seluruh Indonesia\n\n`
        for (let i of fetch.result) {
            teks += `⭔ Provinsi : ${i.provinsi}\n`
            teks += `⭔ Kota : \n${i.kota.join("\n")}\n`
            teks += `\n`
        }
        killua.sendText(m.from, teks, m)
    }
}