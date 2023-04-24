const { isUrl, getRandom } = require("../../lib/Function")
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')

module.exports = {
    name: "dl",
    alias: ["dl"],
    use: "<url>",
    desc: "Send Media From URL",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(killua, m, { text, args }) => {
        if (!isUrl(text)) return  m.reply(`Invalid url`)
        let [a, b] = args
        if (a.toLowerCase() === "audio") {
            const zen = getRandom('mp3')
            ffmpeg(b)
            .audioBitrate(128)
            .save('../temp/' + zen)
            .on('end', () => {
                killua.sendFile(m.from, fs.readFileSync('./temp/' + zen), "", m).then(data => {
                    fs.unlinkSync('../temp/' + zen);
                })
            })
        } else {
            killua.sendFile(m.from, isUrl(a)[0], "", m)
        }
    },
    isQuery: true
} 