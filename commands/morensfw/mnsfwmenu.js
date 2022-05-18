module.exports = {
    name: "mnsfwmenu",
    alias: ["morensfwmenu"],
    use: "[listmenu]",
    desc: "listMessage More Random Image NSFW",
    type: "morensfw",
    example: "%prefix%command",
    start: async(killua, m, {}) => {
        const sections = [{
            title: "Morensfw",
            rows: [
                {title: "Random Ahegao", rowId: "mnsfwimage ahegao"},
                {title: "Random Ass", rowId: "mnsfwimage ass"},
                {title: "Random BDSM", rowId: "mnsfwimage bdsm"},
                {title: "Random Blowjob", rowId: "mnsfwimage blowjob"},
                {title: "Random Cuckold", rowId: "mnsfwimage cuckold"},
                {title: "Random Cum", rowId: "mnsfwimage cum"},
                {title: "Random Ero", rowId: "mnsfwimage ero"},
                {title: "Random Femdom", rowId: "mnsfwimage femdom"},
                {title: "Random Foot", rowId: "mnsfwimage foot"},
                {title: "Random Gangbang", rowId: "mnsfwimage gangbang"},
                {title: "Random Glasses", rowId: "mnsfwimage glasses"},
                {title: "Random Hentai", rowId: "mnsfwimage hentai"},
                {title: "Random Hentaigif", rowId: "mnsfwimage hentaigif"},
                {title: "Random Jahy", rowId: "mnsfwimage jahy"},
                {title: "Random Maid", rowId: "mnsfwimage maid"},
                {title: "Random Manga", rowId: "mnsfwimage manga"},
                {title: "Random Masturbation", rowId: "mnsfwimage masturbation"},
                {title: "Random Mobilewall", rowId: "mnsfwimage mobilewall"},
                {title: "Random Netorare", rowId: "mnsfwimage netorare"},
                {title: "Random Nsfwneko", rowId: "mnsfwimage nsfwneko"},
                {title: "Random Sfwneko", rowId: "mnsfwimage sfwneko"},
                {title: "Random Orgy", rowId: "mnsfwimage orgy"},
                {title: "Random Panties", rowId: "mnsfwimage panties"},
                {title: "Random Pussy", rowId: "mnsfwimage pussy"},
                {title: "Random Tentacles", rowId: "mnsfwimage tentacles"},
                {title: "Random Thighs", rowId: "mnsfwimage thighs"},
                {title: "Random Yuri", rowId: "mnsfwimage yuri"},
                {title: "Random Zettairyouiki", rowId: "mnsfwimage zettairyouiki"},
            ]
        }]
        const listMessage = {
            text: "More NSFW",
            footer: config.footer,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    },
    noLimit: true,
}