module.exports = {
    name: "sfwmenu",
    alias: ["menusfw"],
    use: "[listmenu]",
    desc: "listMessage Random Image SFW From NekosLife",
    type: "nekoslife",
    example: "%prefix%command",
    start: async(killua, m, {}) => {
        const sections = [{
            title: "Sfw",
            rows: [
                {title: "Random Waifu", rowId: "sfwimage waifu"},
                {title: "Random Gecg", rowId: "sfwimage gecg"},
                {title: "Random Avatar", rowId: "sfwimage avatar"},
                {title: "Random Kemonomimi", rowId: "sfwimage kemonomimi"},
                {title: "Random Holo", rowId: "sfwimage holo"},
                {title: "Random Meow", rowId: "sfwimage meow"},
                {title: "Random Neko", rowId: "sfwimage neko"},
                {title: "Random FoxGirl", rowId: "sfwimage fox_girl"},
                {title: "Random Wallpaper", rowId: "sfwimage wallpaper"},
            ]
        },
        {
            title: "Sfw 2",
            rows: [
                {title: "Cuddle [GIF]", rowId: "sfwgif cuddle"},
                {title: "Slap [GIF]", rowId: "sfwgif slap"},
                {title: "Baka [GIF]", rowId: "sfwgif baka"},
                {title: "Tickle [GIF]", rowId: "sfwgif tickle"},
                {title: "Pat [GIF]", rowId: "sfwgif pat"},
                {title: "Kiss [GIF]", rowId: "sfwgif kiss"},
                {title: "Hug [GIF]", rowId: "sfwgif hug"},
                {title: "Feed [GIF]", rowId: "sfwgif feed"},
                {title: "Smug [GIF]", rowId: "sfwgif smug"},
                {title: "Poke [GIF]", rowId: "sfwgif poke"}
            ]
        }]
        const listMessage = {
            text: "NekosLife [SFW]",
            footer: config.footer,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    },
    noLimit: true,
}