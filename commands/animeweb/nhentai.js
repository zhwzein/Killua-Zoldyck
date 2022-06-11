const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nhentai",
    alias: ["nh"],
    use: "<query>",
    desc: "Search Anime From Nhentai",
    type: "animeweb",
    example: `%prefix%command 114512`,
    start: async(killua, m, { text }) => {
        try {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/nhentai", { query: text }, "apikey"))
            let caption = `Nhentai Search :\n\n`
            let i = fetch.result
            caption += `⭔ ID : ${i.id}\n`
            caption += `⭔ English Title : ${i.title.english ?? ""}\n`
            caption += `⭔ Japanese Title : ${i.title.japanese ?? ""}\n`
            caption += `⭔ Pretty Title : ${i.title.pretty ?? ""}\n`
            caption += `⭔ Image Length : ${i.image.length}\n`
            let buttons = [
                {buttonId: `nhpdf ${text}`, buttonText: { displayText: 'Download PDF'}, type: 1 },
            ]
            let buttonMessage = {
                image: { url: i.image[0] },
                caption: caption,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        } catch {
            global.mess("error", m)
        }
    },
    isQuery: true
}