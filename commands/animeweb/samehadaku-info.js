const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "samehadaku-info",
    alias: ["samehadaku-detail","samehadaku-info","samehadakuinfo","samehadakudetail"],
    use: "<url>",
    desc: "Search Information Anime From Samehadaku",
    type: "animeweb",
    example: `\nSamehadaku Info : %prefix%command <url> For Detail`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/animeweb/samehadaku/detail", { url: isUrl(text)[0] }, "apikey"))
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
        let url = search?.episode_list
        for (let a of url) {
            if (!a) return m.reply("Episode Not Found!")
            array.push([a.title, [[a.title, `.samehadaku-download ${a.link}`]]])
        }
        killua.sendList(m.from, "Samehadaku Detail", "This is a list to download one of the episodes", config.footer, "Choose", array, m, { previewType: 4 })
    },
    isQuery: true
}