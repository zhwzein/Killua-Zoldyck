const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "samehadaku-batchdetail",
    alias: ["samehadakubatchdetail","samehadaku-batchinfo"],
    use: "<url>",
    desc: "Search Information Batch Anime From Samehadaku",
    type: "animeweb",
    example: `\nSamehadaku Batch : %prefix%command <url> For Detail`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/samehadaku/batchdetail", { url: isUrl(text)[0] }, "apikey"))
        let search = fetch.result
        let array = []
        let caption = `${search?.title}\n\n`
        caption += `⭔ Release : ${search?.release_date}\n`
        caption += `⭔ Score : ${search?.score}\n`
        caption += `⭔ Rate : ${search?.rate}\n`
        for (let genre of search.genre_list) {
        caption += `⭔ Genre : ${genre?.genre_name} (${genre?.genre_link}\n`
        }
        caption += `⭔ Japanese : ${search?.japanese}\n`
        caption += `⭔ English : ${search?.english}\n`
        caption += `⭔ Type : ${search?.type}\n`
        caption += `⭔ Duration : ${search?.duration}\n`
        caption += `⭔ Total Episode : ${search?.total_episode}\n`
        for (let season of search.season_list) {
        caption += `⭔ Season : ${season?.season_name} (${season?.season_link})\n`
        }
        for (let producer of search.producer_list) {
        caption += `⭔ Producer : ${producer?.producer_name} (${producer?.producer_link})\n`
        }
        caption += `⭔ Synonym : ${search?.synonym}\n`
        caption += `⭔ Status : ${search?.status}\n`
        caption += `⭔ Source : ${search?.source}\n`
        for (let studio of search.studio_list) {
        caption += `⭔ Studio : ${studio?.studio_name} (${studio?.studio_link})\n`
        }
        killua.sendFile(m.from, search?.thumb, "", m, { caption })
        let url = search?.download_list[1]
        let arr = []
        for (const c of url.content) {
        arr.push({
            quality: c.quality,
            url: c.vendor.filter(a => a.name == 'Bayfiles')
        })}
        array.push(
        [arr[0].quality, [[arr[0].quality, `.bayfiles ${arr[0].url[0].link}`]]],
        [arr[1].quality, [[arr[1].quality, `.bayfiles ${arr[1].url[0].link}`]]])
        killua.sendList(m.from, "Samehadaku Batch Detail", "Choose one to download the batch", config.footer, "Choose", array, m, { previewType: 4 })
    },
    isQuery: true
}