const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "doujindesu",
    alias: ["doujin","dn"],
    use: "<query>",
    desc: "Latest or Search Anime From Doujindesu & Pdf Downloader",
    type: "animeweb",
    example: `\nDoujindesu Latest : %prefix%command\nDoujindesu Search : %prefix%command <query> `,
    start: async(killua, m, { text }) => {
        if (isUrl(text)) {
            let fetch = await fetchUrl(`https://zenzapis.herokuapp.com/doujin?url=${isUrl(text)[0]}&key=andaracantik`)
            let caption = `Doujindesu Search :\n\n`
            let i = fetch.result
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Date : ${i.date}\n`
            caption += `⭔ Url : ${i.url}\n`
            caption += `⭔ Image Length : ${i.image.length}\n`
            let buttons = [
                {buttonId: `doujindesupdf ${text}`, buttonText: { displayText: 'Download PDF'}, type: 1 },
            ]
            let buttonMessage = {
                image: { url: i.image[1] },
                caption: caption,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/doujindesu/search", { query: text }, "apikey"))
            let caption = `Doujindesu Search :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Score : ${i.score}\n`
                caption += `⭔ Status : ${i.status}\n`
                caption += `⭔ Link : ${i.link}\n\n`
            }
            killua.sendText(m.from, caption, m)
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/doujindesu/latest", {}, "apikey"))
            let caption = `Doujindesu Latest :\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Score : ${i.score}\n`
                caption += `⭔ Status : ${i.status}\n`
                caption += `⭔ Link : ${i.link}\n`
                caption += `⭔ Last Episode : ${i.last_episode}\n\n`
            }
            killua.sendText(m.from, caption, m)
        }
    }
}