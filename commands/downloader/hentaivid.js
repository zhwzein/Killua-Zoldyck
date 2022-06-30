const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "hentaivid",
    alias: ["hentaivideo"],
    desc: "Generate Random Video From hentaivid",
    type: "downloader",
    example: "%prefix%command",
    start: async(killua, m, {}) => {
        if (text.toLowerCase() === "longer") {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/hentaivid/longer", {}, "apikey"))
            let teks = `⭔ Title : ${fetch.result.title}\n⭔ Category : ${fetch.result.category}\n⭔ Share : ${fetch.result.share_count}\n⭔ Views : ${fetch.result.views_count}`
            killua.sendFile(m.from, fetch.result.video_1, "", m, { caption: teks })
        } else {
            let fetch = await fetchUrl(global.api("zenz", "/downloader/hentaivid", {}, "apikey"))
            let teks = `⭔ Title : ${fetch.result.title}\n⭔ Category : ${fetch.result.category}\n⭔ Share : ${fetch.result.share_count}\n⭔ Views : ${fetch.result.views_count}`
            killua.sendFile(m.from, fetch.result.video_1, "", m, { caption: teks })
        }
    },
}