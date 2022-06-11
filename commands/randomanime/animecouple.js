let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animecouple",
    alias: ["animecouples"],
    desc: "Generate Random Image Anime Couples",
    type: "randomanime",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomanime/couples", {}, "apikey"))
        killua.sendFile(m.from, fetch.result.male, "", m, { caption: "Random Anime Couples Male" })
        killua.sendFile(m.from, fetch.result.female, "", m, { caption: "Random Anime Couples Female" })
    }
}