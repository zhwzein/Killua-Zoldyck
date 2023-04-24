const { isUrl } = require("../../lib/Function")
const { File, Storage } = require("megajs")
const axios = require("axios")

module.exports = {
    name: "mega",
    alias: ["megadownload"],
    use: "<url>",
    desc: "Download Media From https://nz",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(killua, m, { text }) => {
        let url = /mega/i.test(await isUrl(text)[0]) ? await isUrl(text)[0]  : await axios(await isUrl(text)[0]).then((a) => a.request.res.responseUrl)
        
        new Storage({
            email: "emperordian@gmail.com",
            password: "ffmlpubg07",
            keepalive: true,
            userAgent: "Mozilla/5.0 (Linux; Android 10; RMX2020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36"
        }).ready
        
        let mega = await File.fromURL(url)
        await mega.loadAttributes(async function(error, file) {
        if (error) return m.reply(Func.format(error))
        let { mime, data } = await killua.getFile(await (await mega.downloadBuffer()))
            killua.sendMessage(m.from, {
                document: data,
                mimetype: mime,
                fileName: file?.name,
                caption: `Mega Downloader\n\n⭔ File Name : ${file?.name}\n⭔ Download ID : ${file?.downloadId}\n⭔ Type : ${mime}`
            }, { quoted: m })
    })
    },
    isQuery: true
}