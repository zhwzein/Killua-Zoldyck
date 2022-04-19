module.exports = {
    name: "takesticker",
    alias: ["takestick","take"],
    desc: "Take And Change Sticker Exif",
    type: "convert",
    example: "Example : %prefix%command packname|author",
    exec: async(killua, m, { command, prefix, text, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            if (!text.includes('|')) return m.reply(`Example : ${prefix + command} packname|author`)
            let download = await quoted.download()
            let [a, b] = text.split`|`
            global.mess("wait", m)
            killua.sendFile(m.from, download, "", m, { asSticker: true, author: b, packname: a, categories: ['😄','😊'] })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    },
    isQuery: true
}