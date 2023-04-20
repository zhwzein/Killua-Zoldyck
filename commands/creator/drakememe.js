module.exports = {
    name: "drakememe",
    alias: ["drake"],
    use: "<query>",
    desc: "Drake Meme Maker",
    type: "creator",
    example: "%prefix%command top|bottom",
    start: async(killua, m, { text }) => {
        let [a, b] = text.split`|`
        killua.sendFile(m.from, global.api("zenz", "/creator/drakememe", {text: a, text2: b}, "apikey"), "", m)
    },
    isQuery: true
}