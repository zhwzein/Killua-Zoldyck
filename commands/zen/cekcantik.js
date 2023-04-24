const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "cekcantik",
    alias: ["cantikcek"],
    desc: "Zen Cek Cantik",
    type: "zen",
    start: async (killua, m, { text }) => {
        if (!text) return m.reply(`Example: ${prefix + command} Nama`)
        const tanya = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v', '30% Semangat Kaka Merawat Dirinya><', '20% Semangat Ya Kaka👍', '40% Wahh Kaka><', '50% kaka cantik deh><', '60% Hai Cantik🐊', '70% Hai Ukhty🐊', '62% Kakak Cantik><', '74% Kakak ni cantik deh><', '83% Love You Kakak><', '97% Assalamualaikum Ukhty🐊', '100% Kakak Pake Susuk ya??:v', '29% Semangat Kakak:)', '94% Hai Cantik><', '75% Hai Kakak Cantik', '82% wihh Kakak Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
        const jawab = tanya[Math.floor(Math.random() * tanya.length)]
        m.reply(`Pertanyaan : Cantik Cek Neng ${text}\n\nJawaban : ${jawab}`)
    }
}