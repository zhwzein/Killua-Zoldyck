module.exports = {
    name: "botcomment",
    alias: ["botmaker","botc"],
    desc: "Bot Comment Maker",
    type: "creator",
    example: "Example : %prefix%command text",
    exec: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/botcomment", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}