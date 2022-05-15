const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asmaulhusna",
    alias: ["asmaallah"],
    desc: "Get Asmaul Husna & Translate",
    type: "islami",
    start: async(killua, m, { text, args }) => {
        if (text) {
            let fetch = await fetchUrl('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json')
            let result = fetch.filter(v => v.index == text).map(i => `
⭔ No : ${i.index}
${i.arabic}
- ${i.latin}
Artinya :
- Id : ${i.translation_id}
- En : ${i.translation_en}            
            `)
            killua.sendText(m.from, result, m)
        } else if (text.endsWith("--all")) {
            let fetch = await fetchUrl('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json')
            let teks = ""
            for (let i of fetch) {
                teks += `
⭔ No : ${i.index}
${i.arabic}
- ${i.latin}
Artinya :
- Id : ${i.translation_id}
- En : ${i.translation_en}\n\n
                `
            }
            killua.sendText(m.from, teks, m)
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/islami/asmaulhusna", {}, "apikey"))
            killua.sendText(m.from, `
⭔ No : ${fetch.result.index}
${fetch.result.arabic}
- ${fetch.result.latin}
Artinya :
- Id : ${fetch.result.translation_id}
- En : ${fetch.result.translation_en}
            `, m)
        }
    }
}