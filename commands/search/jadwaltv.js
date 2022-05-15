const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadwaltv",
    alias: ["jadwaltv"],
    use: "<query>",
    desc: "Search jadwal tv",
    type: "search",
    example: `%prefix%command gtv\n
    query:

    ⭔ rcti
    ⭔ nettv
    ⭔ antv
    ⭔ gtv
    ⭔ indosiar
    ⭔ inewstv
    ⭔ kompastv
    ⭔ metrotv
    ⭔ mnctv
    ⭔ rtv
    ⭔ sctv
    ⭔ trans7
    ⭔ transtv
    ⭔ tvone
    ⭔ tvri
    `,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/searching/jadwaltv", { query: text }, "apikey"))
        let caption = `Jadwal TV Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result.jadwal) {
            caption += `⭔ Acara : ${i.acara}\n`
            caption += `⭔ Time : ${i.time}\n\n`
        }
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}
