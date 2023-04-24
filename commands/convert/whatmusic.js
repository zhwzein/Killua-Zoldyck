const { fetchUrl, isUrl } = require("../../lib/Function")
const { getRandom } = require("../../lib/Function")
let axios = require('axios')
let BodyForm = require('form-data')

module.exports = {
    name: "whatmusic",
    alias: ["findmusic"],
    use: "<reply>",
    desc: "Search Music",
    type: "convert",
    example: `%prefix%command <text> --audio reply`,
    isPremium: true,
    start: async(killua, m, { command, quoted, prefix, text, mime }) => {
        if (/audio/.test(mime)) {
            let download = await killua.downloadMediaMessage(quoted)
            const form = new BodyForm()
            form.append('sampleFile', download, { filename: getRandom('mp3') })
            axios.post(global.api("zenz", "/convert/whatmusic", {}, "apikey"), form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}`}
            }).then(({ data }) => {
                let caption = `What Music :\n\n`
                caption += `⭔ Title : ${data.result.title}\n`
                caption += `⭔ Artist : ${data.result.artist}\n`
                caption += `⭔ Album : ${data.result.album}\n`
                caption += `⭔ Genres : ${data.result.genres}\n`
                caption += `⭔ Release : ${data.result.crereleaseatedOn}\n`
                killua.sendText(m.from, caption, m)
            })
        } else if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/convert/whatmusic", { url: isUrl(text)[0] }, "apikey"))
            let caption = `What Music :\n\n`
            let i = fetch.result
            caption += `⭔ Title : ${i.title}\n`
            caption += `⭔ Artist : ${i.artist}\n`
            caption += `⭔ Album : ${i.album}\n`
            caption += `⭔ Genres : ${i.genres}\n`
            caption += `⭔ Release : ${i.crereleaseatedOn}\n`
            killua.sendText(m.from, caption, m)
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}
