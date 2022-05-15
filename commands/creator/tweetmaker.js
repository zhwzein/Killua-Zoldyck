module.exports = {
    name: "tweetmaker",
    alias: ["twc","tweetcomment"],
    use: "<query>",
    desc: "Twitter Comment Maker",
    type: "creator",
    example: "%prefix%command text|username",
    start: async(killua, m, { command, prefix, text }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} Text|Username`)
        let [a, b] = text.split`|`
        killua.sendFile(m.from, global.api("zenz", "/creator/maketweet", {text: a, text2: b}, "apikey"), "", m)
    },
    isQuery: true
}