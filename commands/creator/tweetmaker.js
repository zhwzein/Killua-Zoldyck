module.exports = {
    name: "tweetmaker",
    alias: ["twc","tweetcomment"],
    desc: "Twitter Comment Maker",
    type: "creator",
    exec: async(killua, m, { text }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} Text|Username`)
        let [a, b] = text.split`|`
        killua.sendFile(m.from, global.api("zenz", "/creator/maketweet", {text: a, text2: b}, "apikey"), "", m)
    }
}