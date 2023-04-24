const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "nambang",
    alias: ["nambang"],
    desc: "Zen Nambang",
    type: "zen",
    noLimit: true,
    start: async (killua, m) => {
        if (user.isLimitGame(m.sender, config.options.limitGame, _user) && !m.fromMe)
        return m.reply(`Your limit Game has run out, please send ${prefix}limit to check the limit`);
        user.limitGameAdd(m.sender, _user)

        if (nambang.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Pancingan Yang Belum Diselesaikan!")
        m.reply('Sedang Menambang, silahkan tunggu..')

        nambang[m.sender.split('@')[0]] = + new Date
        await sleep(Math.floor(10000 + Math.random() * 50000))

        if (nambang.hasOwnProperty(m.sender.split('@')[0])) {
            const result = ["🗿", "💎", "💰", "ZONK"]
            const hasil = result[Math.floor(Math.random() * result.length)]
            if (hasil == "🗿") {
                const ditangkap = Math.ceil(Math.random() * 10)
                rpg.addBatu(m.sender, ditangkap, _rpg)
                m.reply(`Hasil Tangkapan : Batu ${hasil}\nJumlah Tangkapan : ${ditangkap}\nSelama ${clockString(new Date - nambang[m.sender.split('@')[0]])}`)
            } else if (hasil == "💎") {
                const ditangkap = Math.ceil(Math.random() * 2)
                rpg.addPermata(m.sender, ditangkap, _rpg)
                m.reply(`Hasil Tangkapan : Permata ${hasil}\nJumlah Tangkapan : ${ditangkap}\nSelama ${clockString(new Date - nambang[m.sender.split('@')[0]])}`)
            } else if (hasil == "💰") {
                const ditangkap = Math.ceil(Math.random() * 5)
                rpg.addEmas(m.sender, ditangkap, _rpg)
                m.reply(`Hasil Tangkapan : Emas ${hasil}\nJumlah Tangkapan : ${ditangkap}\nSelama ${clockString(new Date - nambang[m.sender.split('@')[0]])}`)
            } else if (hasil == "ZONK") {
                m.reply('Anda Tewas Tertimpa Beton Dan Tidak Mendapatkan Tambangan')
            } else {
                m.reply("404")
            }
            delete nambang[m.sender.split('@')[0]]
        }
    }
}