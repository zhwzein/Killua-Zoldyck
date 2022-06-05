let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asupannatajadeh",
    alias: ["asupannata"],
    desc: "Generate Random TikTok Asupan From Nata",
    type: "randomasupan",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await global.api("zenz", "/api/random/asupan/natajadeh", {}, "apikey")
        killua.sendFile(m.from, fetch, "", m, { caption: "Random TikTok Asupan From Nata" })
    }
}