const { getRandom } = require("../../lib/Function")
const request = require('request')
const fs = require('fs')

module.exports = {
    name: "waifu2x",
    alias: ["upscaler"],
    desc: "Upscaler Image Maker",
    type: "creator",
    exec: async(killua, m, { command, prefix, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image/.test(mime)) {
            global.mess("wait", m)
            let download = await killua.downloadAndSaveMediaMessage(quoted)
            file_name = getRandom('jpg')
            request({
                url: global.api("zenz", "/creator/waifu2x", {}, "apikey"),
                method: 'POST',
                formData: {
                    "sampleFile": fs.createReadStream(download)
                },
                encoding: "binary"
            }, async function(error, response, body) {
                fs.unlinkSync(download)
                fs.writeFileSync(file_name, body, "binary")
                ini_buff = fs.readFileSync(file_name)
                await killua.sendFile(m.from, ini_buff, "", m).then(() => {
                    fs.unlinkSync(file_name)
                })
            });
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    }
}