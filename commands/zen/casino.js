const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "casino",
    alias: ["judi"],
    desc: "Zen Casino",
    type: "zen",
    noLimit: true,
    start: async (killua, m, { text, command }) => {
        if (casino.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Taruhan Yang Belum Diselesaikan!")
        if (user.isLimitGame(m.sender, config.options.limitGame, _user) && !m.fromMe)
        return m.reply(`Your limit Game has run out, please send ${prefix}limit to check the limit`);
        user.limitGameAdd(m.sender, _user)

        if (!text) return m.reply('Mau Taruhan Berapa ?')
        // if (text <= 4999) return m.reply('Miskin Amat.. Minimal 5000')
        if (user.getBalance(m.sender, _user) <= text) return m.reply(`Maaf Balance Anda Tidak Mencukupi`)
        m.reply('Taruhan Sedang Berlangsung, Silahkan Tunggu')

        casino[m.sender.split('@')[0]] = + new Date
        await sleep(5000)

        if (casino.hasOwnProperty(m.sender.split('@')[0])) {
            const result = ["MENANG", "KALAH", "LOSE"]
            const bayar = text * 2 - 100
            const hasil = result[Math.floor(Math.random() * result.length)]

            if (hasil == "MENANG") {
                user.addBalance(m.sender, bayar, _user)
                m.reply(`Selamat Kamu memenangkan ${command} sebesar ${bayar}`)
            } else if (hasil == "KALAH") {
                user.jualBalance(m.sender, bayar, _user)
                m.reply(`Maaf Kamu Kalah Dan Kehilangan sebesar ${bayar}`)
            } else if (hasil == "LOSE") {
                user.jualBalance(m.sender, bayar, _user)
                m.reply(`Maaf Kamu Kalah Dan Kehilangan sebesar ${bayar}`)
            } else {
                m.reply(" X error X ")
            }
            delete casino[m.sender.split('@')[0]]
        }
    }
}