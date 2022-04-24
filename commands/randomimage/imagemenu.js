module.exports = {
    name: "imagemenu",
    alias: ["menuimage"],
    desc: "listMessage Random Image From Apis",
    type: "randomimage",
    example: "Example : %prefix%command",
    exec: async(killua, m, {}) => {
        const sections = [{
            title: "Random Image",
            rows: [
                {title: "Random Cosplayer", rowId: "randomimage cosplay"},
                {title: "Random darkjoke", rowId: "randomimage darkjoke"},
                {title: "Random Meme", rowId: "randomimage meme"},
                {title: "Random MemeIndo", rowId: "randomimage memeindo"},
                {title: "Random Anime Couple", rowId: "animecouple"},
                {title: "Random Anime", rowId: "randomimage anime"},
                {title: "Random Waifu", rowId: "randomimage waifu"},
                {title: "Random Husbu", rowId: "randomimage husbu"},
                {title: "Random Neko", rowId: "randomimage neko"},
                {title: "Random Shinobu", rowId: "randomimage shinobu"},
                {title: "Random Megumin", rowId: "randomimage megumin"},
                {title: "Random Patrick", rowId: "randomimage patrick"},
            ]
        },
        {
            title: "Random Image 2",
            rows: [
                {title: "Random Waifu [NSFW]", rowId: "randomimage waifus"},
                {title: "Random Neko [NSFW]", rowId: "randomimage nekos"},
                {title: "Random Trap [NSFW]", rowId: "randomimage trap"},
                {title: "Random Blowjob [NSFW]", rowId: "randomimage blowjob"}
            ]
        }]
        const listMessage = {
            text: "Random Image",
            footer: `Powered By https://zenzapis.xyz`,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    }
}