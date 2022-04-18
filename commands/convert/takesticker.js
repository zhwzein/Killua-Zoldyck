const { isUrl } = require("../../lib/Function")

module.exports = {
    name: "takesticker",
    alias: ["takestick","take"],
    desc: "Take And Change Sticker Exif",
    type: "convert",
    example: "Example : %prefix%command packname | author",
    exec: async(killua, m, { command, prefix, args, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            if (!args.includes('|')) return m.reply(`Example : ${prefix + command} packname | author`)
            global.mess("wait", m)
            let download = await quoted.download()
            let anu = args.join(' ').split('|')
			const packname = anu[0] !== '' ? anu[0] : `zenzapis`
            const author = typeof anu[1] !== 'undefined' ? anu[1] : ``
            killua.sendFile(m.from, download, "", m, { asSticker: true, author: author, packname: packname, categories: ['😄','😊'] })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    },
    isQuery: true
}
