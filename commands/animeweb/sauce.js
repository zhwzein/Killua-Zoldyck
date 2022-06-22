const { fetchUrl, isUrl } = require("../../lib/Function")
const { getRandom } = require("../../lib/Function")
let axios = require('axios')
let BodyForm = require('form-data')

module.exports = {
    name: "sauce",
    alias: ["animesource"],
    use: "<reply>",
    desc: "Search Manga Anime Source",
    type: "animeweb",
    example: `%prefix%command <text> --image reply`,
    start: async(killua, m, { command, prefix, text, mime, quoted }) => {
        if (/image|video|sticker/.test(mime)) {
            let download = await killua.downloadMediaMessage(quoted)
            const form = new BodyForm()
            form.append('sampleFile', download, { filename: getRandom('jpeg') })
            axios.post(global.api("zenz", "/animeweb/sauce", {}, "apikey"), form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}`}
            }).then(({ data }) => {
                let caption = `Anime Source :\n\n`
                for (let i of data.result) {
                    caption += `Url: ${i.url}\n`
                    caption += `Site: ${i.site}\n`
                    caption += `Similarity: ${i.similarity}\n`
                    caption += `Author Name: ${i.authorName}\n`
                    caption += `Author Url: ${i.authorUrl}\n`
                    caption += `Title: ${i.raw.data.title}\n`
                    caption += `Creator: ${i.raw.data.creator}\n`
                    caption += `Material: ${i.raw.data.material}\n`
                    caption += `Characters: ${i.raw.data.characters}\n`
                    caption += `Source: ${i.raw.data.source}\n\n`
                }
                killua.sendFile(m.from, data.result[0].thumbnail, "", m, { caption })
            })
        } else if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/animeweb/sauce", { url: isUrl(text)[0] }, "apikey"))
            let caption = `Anime Source :\n\n`
            for (let i of fetch.result) {
                caption += `Url: ${i.url}\n`
                caption += `Site: ${i.site}\n`
                caption += `Similarity: ${i.similarity}\n`
                caption += `Author Name: ${i.authorName}\n`
                caption += `Author Url: ${i.authorUrl}\n`
                caption += `Title: ${i.raw.data.title}\n`
                caption += `Creator: ${i.raw.data.creator}\n`
                caption += `Material: ${i.raw.data.material}\n`
                caption += `Characters: ${i.raw.data.characters}\n`
                caption += `Source: ${i.raw.data.source}\n\n`
            }
            killua.sendFile(m.from, data.result[0].thumbnail, "", m, { caption })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}
