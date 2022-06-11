let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asupanaeuni",
    alias: ["asupanaeunicetjoaa"],
    desc: "Generate Random TikTok Asupan From Aeuni",
    type: "randomasupan",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await global.api("zenz", "/randomasupan/aeunicetjoaa", {}, "apikey")
        killua.sendFile(m.from, fetch, "", m, { caption: "Random TikTok Asupan From Aeuni" })
    }
}