const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "mancing",
    alias: ["mancing"],
    desc: "Zen Mancing",
    type: "zen",
    noLimit: true,
    start: async (killua, m) => {
        if (user.isLimitGame(m.sender, config.options.limitGame, _user) && !m.fromMe)
        return m.reply(`Your limit Game has run out, please send ${prefix}limit to check the limit`);
        user.limitGameAdd(m.sender, _user)

        if (mancing.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Pancingan Yang Belum Diselesaikan!")
        m.reply('Sedang Memancing, silahkan tunggu..')

        mancing[m.sender.split('@')[0]] = + new Date
        await sleep(Math.floor(10000 + Math.random() * 50000))

        if (mancing.hasOwnProperty(m.sender.split('@')[0])) {
            const bahan = ['🐟', '🐠', '🐡']
            const bahan_ = bahan[Math.floor(Math.random() * bahan.length)]
            const ditangkap = Math.ceil(Math.random() * 10)

            const result = ["BAHAN", "ZONK"]
            const hasil = result[Math.floor(Math.random() * result.length)]
            if (hasil == "BAHAN") {
                rpg.addIkan(m.sender, ditangkap, _rpg)
                m.reply(`Hasil Tangkapan Ikan ${bahan_}\nJumlah Tangkapan : ${ditangkap}\nSelama ${clockString(new Date - mancing[m.sender.split('@')[0]])}`)
            } else if (hasil == "ZONK") {
                m.reply('Anda Tewas Dimakan Hiu Dan Tidak Mendapatkan Ikan')
            } else {
                m.reply("404")
            }
            delete mancing[m.sender.split('@')[0]]
        }
    }
}