let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asupan",
    alias: ["asupan"],
    desc: "Generate Random TikTok Asupan",
    type: "randomasupan",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await global.api("zenz", "/randomasupan/asupan", {}, "apikey")
        killua.sendFile(m.from, fetch, "", m, { caption: "Random TikTok Asupan" })
    }
}