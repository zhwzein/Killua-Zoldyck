const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "gdrive",
    alias: ["gdrivrownload","gdrivedl","googledrive"],
    use: "<url>",
    desc: "Download Media From https://drive.google.com",
    type: "downloader",
    example: "%prefix%command <url>",
    isPremium: true,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/gdrive", { url: isUrl(text)[0] }, "apikey"))
        let hasil = fetch.result
        let { mime, data } = await killua.getFile(hasil.downloadUrl)
        let caption = `*Google Drive Downloader*\n\n⭔ FileName : ${hasil.fileName}\n⭔ MimeType : ${mime}`
        killua.sendMessage(m.from, { document: data, fileName: hasil.fileName, mimetype: mime, caption }, { quoted: m })
    },
    isQuery: true
}