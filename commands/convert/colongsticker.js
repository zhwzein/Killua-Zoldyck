module.exports = {
    name: "colongsticker",
    alias: ["colong"],
    desc: "Change Sticker Exif To Global Exif",
    type: "convert",
    exec: async(killua, m, { command, prefix, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            global.mess("wait", m)
            let download = await quoted.download()
            killua.sendFile(m.from, download, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    },
}