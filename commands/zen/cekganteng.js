const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "cekganteng",
    alias: ["gantengcek"],
    desc: "Zen Cek Ganteng",
    type: "zen",
    start: async (killua, m, { text }) => {
        if (!text) return m.reply(`Example: ${prefix + command} Nama`)
        const tanya = ['10%', '30%', '20%', '40%', '50%', '60%', '70%', '62%', '74%', '83%', '97%', '100%', '29%', '94%', '75%', '82%', '41%', '39%']
        const jawab = tanya[Math.floor(Math.random() * tanya.length)]
        m.reply(`Pertanyaan : Cek Ganteng Bang ${text}\n\nJawaban : ${jawab}`)
    }
}