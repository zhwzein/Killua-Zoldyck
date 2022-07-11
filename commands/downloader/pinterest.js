const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "pinterest",
    alias: ["pinterestdl"],
    use: "<url>",
    desc: "Download Video From https://pinterest.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/pinterestdl", { url: isUrl(text)[0] }, "apikey"))
        const zen = getRandom('mp3')
        ffmpeg(fetch.result)
        .save('../temp/' + zen)
        .on('end', () => {
            killua.sendFile(m.from, fs.readFileSync('./temp/' + zen), "", m).then(data => {
                fs.unlinkSync('../temp/' + zen);
            })
        })
    },
    isQuery: true
}