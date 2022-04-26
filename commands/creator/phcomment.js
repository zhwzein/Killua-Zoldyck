const { getRandom } = require("../../lib/Function")
const request = require('request')
const fs = require('fs')

module.exports = {
    name: "phcomment",
    alias: ["phc","phmaker"],
    desc: "PornHub Comment Maker",
    type: "creator",
    exec: async(killua, m, { command, text, prefix, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image/.test(mime)) {
            if (!text.includes('|')) return m.reply(`Example : ${prefix + command} Text|Username`)
            global.mess("wait", m)
            let [a, b] = text.split`|`
            let download = await killua.downloadAndSaveMediaMessage(quoted)
            file_name = getRandom('jpg')
            request({
                url: global.api("zenz", "/creator/phcomment", {text: a, text2: b}, "apikey"),
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