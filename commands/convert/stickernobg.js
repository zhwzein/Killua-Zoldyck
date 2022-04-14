const { fetchUrl, isUrl } = require("../../lib/Function")
const fs = require('fs')

module.exports = {
    name: "stickernobg",
    alias: ["nobg","sbg"],
    desc: "Convert Image To Sticker With no background",
    type: "convert",
    exec: async(killua, m, { command, prefix, text, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image/.test(mime)) {
            global.mess("wait", m)
            let imgbb = require('imgbb-uploader')
            let download = await killua.downloadAndSaveMediaMessage(quoted)
            let apikey = await imgbb("8170c546056168c248430201c4bf22b6", download)
            hasil = apikey.display_url
            killua.sendFile(m.from, global.api("zenz", "/convert/sticker-nobg", { url: hasil }, "apikey"), "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            await fs.unlinkSync(download)
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}