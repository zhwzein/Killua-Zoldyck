const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "xnxx",
    alias: ["xnxx"],
    desc: "Download Media From https://xnxx.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.xnxx.com/video-11oxrz72/bigtitted_milf_filled_with_cum_after_assfucking_with_short_guy",
    exec: async(killua, m, { prefix, command, text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/xnxx", { url: isUrl(text)[0] }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let teks = `⭔ Title : ${fetch.result.title}\n⭔ Duration : ${fetch.result.duration}s`
        killua.sendFile(m.from, fetch.result.files.low, "", m, { caption: teks })
    },
    isQuery: true
}