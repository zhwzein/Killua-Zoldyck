module.exports = {
    name: "nsfwgif",
    alias: ["gifnsfw"],
    desc: "Generate Random NSFW GIF From Nekoslife",
    type: "nekoslife",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    exec: async(killua, m, { text }) => {
        let fetch = await global.api("zenz", "/api/anime/nsfw/" + text, {}, "apikey")
        killua.sendFile(m.from, fetch, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
    },
    isQuery: true
}

function type() {
    return ["feetg","bj","kuni","les","boobs","ngif","cum","nsfw_neko_gif","solog","pussy","spank","anal","pwankg"]
}