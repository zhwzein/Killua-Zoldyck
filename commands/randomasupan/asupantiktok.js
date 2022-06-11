let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asupantiktok",
    alias: ["asupantiktok"],
    desc: "Generate Random TikTok Asupan 2",
    type: "randomasupan",
    example: `%prefix%command`,
    start: async(killua, m, {}) => {
        let fetch = await global.api("zenz", "/randomasupan/asupantiktok", {}, "apikey")
        killua.sendFile(m.from, fetch, "", m, { caption: "Random TikTok Asupan 2" })
    }
}