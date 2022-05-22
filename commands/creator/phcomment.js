const fs = require('fs')

module.exports = {
    name: "phcomment",
    alias: ["phc","phmaker"],
    use: "<query>",
    desc: "PornHub Comment Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/phcomment", {
            url: "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153",
            text: text, 
            text2: m.pushName
        }, "apikey"), "", m)
    },
    isQuery: true
}