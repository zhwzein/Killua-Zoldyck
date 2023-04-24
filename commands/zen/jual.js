const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "jual",
    alias: ["sell"],
    desc: "Zen Jual",
    type: "zen",
    noLimit: true,
    start: async (killua, m, { ar, args, prefix, command }) => {
        if (ar[0] === 'ikan') {
            if (!args[1]) return m.reply(`Harga 1 Ikan 50 Balance\nExample: ${prefix + command + " " + ar[0]} 10`)
            if (args[1].includes('-')) return m.reply(`Example ${prefix + command} ikan 1`)
            if (args[1].includes('.')) return m.reply(`Example ${prefix + command} ikan 1`)
            const result = args[1] * 50
            if (rpg.getIkan(m.sender, _rpg) <= args[1]) return m.reply(`Maaf ${m.pushName} Kamu Tidak Punya ${ar[1]} Ikan`)
            if (rpg.getIkan(m.sender, _rpg) >= args[1]) {
                rpg.jualIkan(m.sender, args[1], _rpg)
                user.addBalance(m.sender, result, _user)
                m.reply(`*PENJUALAN BERHASIL*\n\n*Jumlah Ikan Dijual:* ${args[1]}\n*Uang didapat:* ${result}\n\n*Sisa Ikan:* ${rpg.getIkan(m.sender, _rpg)}\n*Sisa Uang:* ${user.getBalance(m.sender, _user)}`)
            }
        } else if (ar[0] === 'batu') {
            if (!args[1]) return m.reply(`Harga 1 Batu 10 Balance\nExample: ${prefix + command + " " + ar[0]} 10`)
            if (args[1].includes('-')) return m.reply(`Example ${prefix + command} batu 1`)
            if (args[1].includes('.')) return m.reply(`Example ${prefix + command} batu 1`)
            const result = args[1] * 10
            if (rpg.getBatu(m.sender, _rpg) <= args[1]) return m.reply(`Maaf ${m.pushName} Kamu Tidak Punya ${ar[1]} Batu`)
            if (rpg.getBatu(m.sender, _rpg) >= args[1]) {
                rpg.jualBatu(m.sender, args[1], _rpg)
                user.addBalance(m.sender, result, _user)
                m.reply(`*PENJUALAN BERHASIL*\n\n*Jumlah Batu Dijual:* ${args[1]}\n*Uang didapat:* ${result}\n\n*Sisa Batu:* ${rpg.getBatu(m.sender, _rpg)}\n*Sisa Uang:* ${user.getBalance(m.sender, _user)}`)
            }
        } else if (ar[0] === 'emas') {
            if (!args[1]) return m.reply(`Harga 1 Emas 100 Balance\nExample: ${prefix + command + " " + ar[0]} 10`)
            if (args[1].includes('-')) return m.reply(`Example ${prefix + command} emas 1`)
            if (args[1].includes('.')) return m.reply(`Example ${prefix + command} emas 1`)
            const result = args[1] * 100
            if (rpg.getEmas(m.sender, _rpg) <= args[1]) return m.reply(`Maaf ${m.pushName} Kamu Tidak Punya ${ar[1]} Emas`)
            if (rpg.getEmas(m.sender, _rpg) >= args[1]) {
                rpg.jualEmas(m.sender, args[1], _rpg)
                user.addBalance(m.sender, result, _user)
                m.reply(`*PENJUALAN BERHASIL*\n\n*Jumlah Emas Dijual:* ${args[1]}\n*Uang didapat:* ${result}\n\n*Sisa Emas:* ${rpg.getEmas(m.sender, _rpg)}\n*Sisa Uang:* ${user.getBalance(m.sender, _user)}`)
            }
        } else if (ar[0] === 'permata') {
            if (!args[1]) return m.reply(`Harga 1 Permata 200 Balance\nExample: ${prefix + command + " " + ar[0]} 10`)
            if (args[1].includes('-')) return m.reply(`Example ${prefix + command} permata 1`)
            if (args[1].includes('.')) return m.reply(`Example ${prefix + command} permata 1`)
            const result = args[1] * 200
            if (rpg.getPermata(m.sender, _rpg) <= args[1]) return m.reply(`Maaf ${m.pushName} Kamu Tidak Punya ${ar[1]} Permata`)
            if (rpg.getPermata(m.sender, _rpg) >= args[1]) {
                rpg.jualPermata(m.sender, args[1], _rpg)
                user.addBalance(m.sender, result, _user)
                m.reply(`*PENJUALAN BERHASIL*\n\n*Jumlah Permata Dijual:* ${args[1]}\n*Uang didapat:* ${result}\n\n*Sisa Permata:* ${rpg.getPermata(m.sender, _rpg)}\n*Sisa Uang:* ${user.getBalance(m.sender, _user)}`)
            }
        } else {
            m.reply(`Mau Jual Apaan ?\n- ikan\n- batu\n- emas\n- permata\n\nExample: ${prefix + command} ikan 10`)
        }
    }
}