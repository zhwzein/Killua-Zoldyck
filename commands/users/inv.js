module.exports = {
    name: "inv",
    alias: ["tas", "inventory"],
    desc: "User inventory Information",
    type: "users",
    example: "%prefix%command",
    noLimit: true,
    start: async (killua, m, { isOwner }) => {
        const balance = user.getBalance(m.sender, _user)
        const fish = rpg.getIkan(m.sender, _rpg)
        const batu = rpg.getBatu(m.sender, _rpg)
        const permata = rpg.getPermata(m.sender, _rpg)
        const emas = rpg.getEmas(m.sender, _rpg)

        let caption = `┏ [ *YOUR INVENTORY* ]`
        caption += `┃\n`
        caption += `┣ *BALANCE* : ${balance}\n`
        caption += `┃\n`
        caption += `┣ [ *HASIL NAMBANG* ]\n`
        caption += `┃\n`
        caption += `┣ *BATU 🗿* : ${batu}\n`
        caption += `┣ *PERMATA 💎* : ${permata}\n`
        caption += `┣ *EMAS 🪙* : ${emas}\n`
        caption += `┃\n`
        caption += `┣ [ *HASIL MANCING* ]\n`
        caption += `┃\n`
        caption += `┃ *FISH 🐟* : ${fish}\n`
        caption += `┗ \n`
        killua.sendText(m.from, caption, m)
    }
}