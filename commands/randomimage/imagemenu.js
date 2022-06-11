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
                {title: "Random Patrick", rowId: "randomimage patrick"},
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