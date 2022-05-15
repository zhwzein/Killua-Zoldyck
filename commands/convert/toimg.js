const { exec } = require("child_process")
const fs = require("fs")
const { getRandom } = require("../../lib/Function")

module.exports = {
    name: "toimg",
    alias:["toimage"],
    use: "<reply>",
    desc: "Convert Sticker to Image",
    type: "convert",
    example: `%prefix%command --sticker reply`,
    start: async(killua, m, { command, prefix, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            let download = await killua.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('png')
            exec(`ffmpeg -i ${download} ${ran}`, (err) => {
                fs.unlinkSync(download)
                if (err) return m.reply('Error')
                buffer = fs.readFileSync(ran)
                killua.sendFile(m.from, buffer, "", m)
                fs.unlinkSync(ran)
            })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}