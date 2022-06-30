module.exports = {
    name: "imagemenu",
    alias: ["menuimage"],
    use: "[listmenu]",
    desc: "listMessage Random Image From Apis",
    type: "randomimage",
    example: "%prefix%command",
    noLimit: true,
    start: async(killua, m, {}) => {
        const sections = [{
            title: "Random Image",
            rows: [
                {title: "Random Cosplayer", rowId: "randomimage cosplay"},
                {title: "Random darkjoke", rowId: "randomimage darkjoke"},
                {title: "Random Meme", rowId: "randomimage meme"},
                {title: "Random MemeIndo", rowId: "randomimage memeindo"},
                {title: "Random 1Cak", rowId: "randomimage onecak"},
                {title: "Random Minecraft", rowId: "minecraft"},
                {title: "Random Patrick", rowId: "randomimage patrick"},
                {title: "Random Aesthetic", rowId: "randomimage aesthetic"},
                {title: "Random Anjing", rowId: "randomimage anjing"},
                {title: "Random Blackpink", rowId: "randomimage blackpink"},
                {title: "Random Boneka", rowId: "randomimage boneka"},
                {title: "Random Cecan", rowId: "randomimage cecan"},
                {title: "Random Cogan", rowId: "randomimage cogan"},
                {title: "Random Hacker", rowId: "randomimage hacker"},
                {title: "Random Kucing", rowId: "randomimage kucing"},
                {title: "Random Mobil", rowId: "randomimage mobil"},
                {title: "Random Motor", rowId: "randomimage motor"},
                {title: "Random Photo Profile", rowId: "randomimage profil"},
                {title: "Random Pubg", rowId: "randomimage pubg"},
                {title: "Random WallHp", rowId: "randomimage wallHp"},
            ]
        }]
        const listMessage = {
            text: "Random Image",
            footer: config.footer,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    }
}