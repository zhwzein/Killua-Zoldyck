module.exports = {
    name: "imagemenu",
    alias: ["menuimage"],
    use: "[listmenu]",
    desc: "listMessage Random Image From Apis",
    type: "randomimage",
    example: "%prefix%command",
    start: async(killua, m, {}) => {
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
                {title: "Random Uniform", rowId: "randomimage uniform"},
                {title: "Random Maid", rowId: "randomimage maid"},
                {title: "Random MarinKitagawa", rowId: "randomimage marin-kitagawa"},
                {title: "Random MoriCalliope", rowId: "randomimage mori-calliope"},
                {title: "Random RaidenShogun", rowId: "randomimage raiden-shogun"},
                {title: "Random Oppai", rowId: "randomimage oppai"},
                {title: "Random Selfies", rowId: "randomimage selfies"},
                {title: "Random Patrick", rowId: "randomimage patrick"},
            ]
        },
        {
            title: "Random Image 2",
            rows: [
                {title: "Random Waifu [NSFW]", rowId: "randomimage waifus"},
                {title: "Random Neko [NSFW]", rowId: "randomimage nekos"},
                {title: "Random Trap [NSFW]", rowId: "randomimage trap"},
                {title: "Random Blowjob [NSFW]", rowId: "randomimage blowjob"},
                {title: "Random Ass [NSFW]", rowId: "randomimage ass"},
                {title: "Random Hentai [NSFW]", rowId: "randomimage hentai"},
                {title: "Random Milf [NSFW]", rowId: "randomimage milf"},
                {title: "Random Oral [NSFW]", rowId: "randomimage oral"},
                {title: "Random Paizuri [NSFW]", rowId: "randomimage paizuri"},
                {title: "Random Ecchi [NSFW]", rowId: "randomimage ecchi"},
                {title: "Random Ero [NSFW]", rowId: "randomimage ero"},
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