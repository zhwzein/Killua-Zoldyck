const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "listsurah",
    alias: ["surah"],
    desc: "List Of Surah Al-quran",
    type: "islami",
    start: async(killua, m) => {
        let fetch = await fetchUrl(global.api("zenz", "/islami/listsurah", {}, "apikey"))
        let teks = `List Surah Al-quran\n\n`
        for (var x in fetch.result) {
            teks += `${x}. ${fetch.result[x]}\n`
        }
        killua.sendText(m.from, teks, m)
    }
}