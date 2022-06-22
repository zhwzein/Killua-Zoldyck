module.exports = {
    name: "ttpcostum",
    alias: ["ttpc"],
    use: "<query>",
    desc: "TTP Custom Maker",
    type: "creator",
    example: "%prefix%command text|colour|bgcolour",
    start: async(killua, m, { text, prefix, command }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} text|colour|bgcolour`)
        let [a, b, c] = text.split`|`
        killua.sendFile(m.from, global.api("zenz", "/creator/ttp", { text: a,  colour: b,  bgcolour: c }, "apikey"), "", m)
    },
    isQuery: true
}