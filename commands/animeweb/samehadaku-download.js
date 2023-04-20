const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "samehadaku-download",
    alias: ["samehadakudownload","samehadakudl"],
    use: "<url>",
    desc: "Download Anime From Samehadaku",
    type: "animeweb",
    example: `\nSamehadaku Downloader : %prefix%command <url> For Download`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/samehadaku/download", { url: isUrl(text)[0] }, "apikey"))
        let search = fetch.result
        if (search.download_list.length == 0) return m.reply("Download not found")
        let array = []
        let url = search?.download_list[1]
        let arr = []
        for (const c of url.content) {
        arr.push({
            quality: c.quality,
            url: c.vendor.filter(a => a.name == 'Racaty')
        })}
        array.push(
        ["Samehadaku Detail", [["Detail For This Anime", `.samehadaku-detail ${search.all_eps}`]]],
        [arr[0].quality, [[arr[0].quality, `.racaty ${arr[0].url[0].link}`]]],
        [arr[1].quality, [[arr[1].quality, `.racaty ${arr[1].url[0].link}`]]])
        killua.sendList(m.from, "Samehadaku Downloader", search.title + "\nChoose one to download the episode", config.footer, "Choose", array, m, { previewType: 4 })
    },
    isQuery: true
}