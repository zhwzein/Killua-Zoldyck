const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "play",
    alias: ["pl"],
    use: "<url>",
    desc: "Send Media From URL",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        if (!isUrl(text)) return  m.reply(`Invalid url`)
        killua.sendFile(m.from, isUrl(text)[0], "", m)
    },
    isQuery: true
}