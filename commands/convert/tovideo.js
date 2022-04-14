const { fetchUrl, isUrl } = require("../../lib/Function")
const fs = require('fs')

module.exports = {
    name: "tovideo",
    alias: ["tovideo","tomp4","v"],
    desc: "Convert Sticker Gif To Video",
    type: "convert",
    exec: async(killua, m, { command, prefix, text, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            global.mess("wait", m)
            let imgbb = require('imgbb-uploader')
            let download = await killua.downloadAndSaveMediaMessage(quoted)
            let apikey = await imgbb("8170c546056168c248430201c4bf22b6", download)
            hasil = apikey.display_url
            let fetch = await fetchUrl(global.api("zenz", "/convert/webp-to-mp4", { url: hasil }, "apikey"))
            if (fetch.result.length == 0) return global.mess("error", m)
            killua.sendFile(m.from, fetch.result, "", m, { caption: 'Convert Sticker Gif To Video' })
            await fs.unlinkSync(download)
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}