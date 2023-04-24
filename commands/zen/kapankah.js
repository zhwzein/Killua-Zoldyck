const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "kapankah",
    alias: ["kapankah"],
    desc: "Zen Kapankah",
    type: "zen",
    start: async (killua, m, { text }) => {
        if (!text) return m.reply(`Example: ${prefix + command} kamu memasak ?`)
        const tanya = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi', 'Tidak Akan Pernah']
        const jawab = tanya[Math.floor(Math.random() * tanya.length)]
        m.reply(`Pertanyaan : ${text}\n\nJawaban : ${jawab}`)
    }
}