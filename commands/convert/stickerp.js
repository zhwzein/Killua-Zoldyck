const { getRandom } = require("../../lib/Function")
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')

module.exports = {
    name: "stickerp",
    alias: ["sp"],
    use: "<reply>",
    desc: "Convert Image To Sticker Uncropped",
    type: "convert",
    example: `%prefix%command --image reply`,
    start: async(killua, m, { command, prefix, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            let download = await killua.downloadAndSaveMediaMessage(quoted)
            file_name = getRandom('webp')
            ffmpeg(`./${download}`).input(download).on('end', function () {
                killua.sendFile(m.from, fs.readFileSync(file_name), "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] }).then(() => {
                    fs.unlinkSync(download)
                    fs.unlinkSync(file_name)
                })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(file_name)
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}