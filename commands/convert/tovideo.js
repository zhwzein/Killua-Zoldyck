const { getRandom, fetchUrl, isUrl } = require("../../lib/Function")
let axios = require('axios')
let BodyForm = require('form-data')

module.exports = {
    name: "tovideo",
    alias: ["tomp4","tomedia"],
    use: "<reply>",
    desc: "Convert Sticker Gif To Video",
    type: "convert",
    example: `%prefix%command --sticker reply`,
    start: async(killua, m, { command, prefix, quoted, mime, text }) => {
        if (/image|video|sticker/.test(mime)) {
            let download = await killua.downloadMediaMessage(quoted)
            const form = new BodyForm()
            form.append('sampleFile', download, { filename: getRandom('webp') })
            axios.post(global.api("zenz", "/convert/webp-to-mp4", {}, "apikey"), form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}`}
            }).then(({ data }) => {
                killua.sendFile(m.from, data.result, "", m, { caption: 'Convert Sticker Gif To Video' })
            })
        } else if (isUrl(text)) {
            let fetch = await fetchUrl(global.api("zenz", "/convert/webp-to-mp4", { url: isUrl(text)[0] }, "apikey"))
            killua.sendFile(m.from, fetch.result, "", m, { caption: 'Convert Sticker Gif To Video' })
        }   else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}