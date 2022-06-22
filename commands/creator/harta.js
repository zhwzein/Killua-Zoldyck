module.exports = {
    name: "harta",
    alias: ["tahta","hartatahta"],
    use: "<query>",
    desc: "Harta Tahta Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/hartatahta", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}