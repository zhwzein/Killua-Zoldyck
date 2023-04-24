const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "apakah",
    alias: ["apakah"],
    desc: "Zen Apakah",
    type: "zen",
    start: async (killua, m, { text }) => {
        if (!text) return m.reply(`Example: ${prefix + command} kamu memasak ?`)
        const tanya = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi', 'Tanyakan Ayam']
        const jawab = tanya[Math.floor(Math.random() * tanya.length)]
        m.reply(`Pertanyaan : ${text}\n\nJawaban : ${jawab}`)
    }
}