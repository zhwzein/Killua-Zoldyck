module.exports = {
    name: "animemenu",
    alias: ["menuanime"],
    use: "[listmenu]",
    desc: "listMessage Random Anime Images From Apis",
    type: "randomanime",
    example: "%prefix%command",
    noLimit: true,
    start: async(killua, m, {}) => {
        const sections = [{
            title: "Random Image",
            rows: [
                {title: "Random Anime Couple", rowId: "animecouple"},
                {title: "Random Anime", rowId: "randomanime anime"},
                {title: "Random Waifu", rowId: "randomanime waifu"},
                {title: "Random Husbu", rowId: "randomanime husbu"},
                {title: "Random Neko", rowId: "randomanime neko"},
                {title: "Random Shinobu", rowId: "randomanime shinobu"},
                {title: "Random Megumin", rowId: "randomanime megumin"},
                {title: "Random Uniform", rowId: "randomanime uniform"},
                {title: "Random Maid", rowId: "randomanime maid"},
                {title: "Random MarinKitagawa", rowId: "randomanime marin-kitagawa"},
                {title: "Random MoriCalliope", rowId: "randomanime mori-calliope"},
                {title: "Random RaidenShogun", rowId: "randomanime raiden-shogun"},
                {title: "Random Oppai", rowId: "randomanime oppai"},
                {title: "Random Selfies", rowId: "randomanime selfies"},
            ]
        },
        {
            title: "Random Image 2",
            rows: [
                {title: "Random Waifu [NSFW]", rowId: "randomanime waifus"},
                {title: "Random Neko [NSFW]", rowId: "randomanime nekos"},
                {title: "Random Trap [NSFW]", rowId: "randomanime trap"},
                {title: "Random Blowjob [NSFW]", rowId: "randomanime blowjob"},
                {title: "Random Ass [NSFW]", rowId: "randomanime ass"},
                {title: "Random Hentai [NSFW]", rowId: "randomanime hentai"},
                {title: "Random Milf [NSFW]", rowId: "randomanime milf"},
                {title: "Random Oral [NSFW]", rowId: "randomanime oral"},
                {title: "Random Paizuri [NSFW]", rowId: "randomanime paizuri"},
                {title: "Random Ecchi [NSFW]", rowId: "randomanime ecchi"},
                {title: "Random Ero [NSFW]", rowId: "randomanime ero"},
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