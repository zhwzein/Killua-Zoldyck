const fs = require('fs')

module.exports = {
    name: "captchamaker",
    alias: ["ccmaker"],
    use: "<query>",
    desc: "Captcha Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/captcha", {
            url: "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153",
            text: text, 
        }, "apikey"), "", m)
    },
    isQuery: true
}