let { fetchUrl, isUrl } = require("../../lib/Function")
let { delay } = require("@adiwajshing/baileys")

module.exports = {
    name: "linesticker",
    alias: ["stickerline"],
    use: "<query>",
    desc: "Search & Download Line Sticker",
    type: "search",
    example: "%prefix%command <query>",
    start: async(killua, m, { command, text, prefix }) => {
        if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/linesticker", { url: text }, "apikey"))
            for (let url of fetch.result.stickers) {
                await delay(1000)
                killua.sendFile(m.from, url, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
            }
        } else if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/searching/stickerline", { query: text }, "apikey"))
            let caption = `Line Sticker Search\n\n`
            for (let i of fetch.result) {
                caption += `⭔ Title : ${i.title}\n`
                caption += `⭔ Url : ${i.url}\n`
                caption += `⭔ Animated ? : ${i.stickerAnimated}\n`
                caption += `⭔ Author Name : ${i.authorName}\n\n`
            }
            killua.sendFile(m.from, fetch.result[0].sticker, "", m, { caption })
        }
    },
    isQuery: true
}