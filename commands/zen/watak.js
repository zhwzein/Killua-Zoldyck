const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "watak",
    alias: ["watak"],
    desc: "Zen Cek Watak",
    type: "zen",
    start: async (killua, m, { text }) => {
        if (!text) return m.reply(`Example: ${prefix + command} Nama`)
        const tanya = ["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
        const jawab = tanya[Math.floor(Math.random() * tanya.length)]
        m.reply(`Pertanyaan : ${text}\n\nJawaban : ${jawab}`)
    }
}