module.exports = {
    name: "ttp",
    alias: ["texttopicture"],
    use: "<query>",
    desc: "TTP Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/ttp", { text: text }, "apikey"), "", m)
    },
    isQuery: true
}