module.exports = {
    name: "nsfwmenu",
    alias: ["menunsfw"],
    desc: "listMessage Random Image NSFW From NekosLife",
    type: "nekoslife",
    example: "Example : %prefix%command",
    exec: async(killua, m, {}) => {
        const sections = [{
            title: "Nsfw",
            rows: [
                {title: "Random Ero", rowId: "nsfwimage erok"},
                {title: "Random Ero Kemo", rowId: "nsfwimage erokemo"},
                {title: "Random Femdom", rowId: "nsfwimage femdom"},
                {title: "Random Futanari", rowId: "nsfwimage futanari"},
                {title: "Random Trap", rowId: "nsfwimage trap"},
                {title: "Random Blowjob", rowId: "nsfwimage blowjob"},
                {title: "Random Hentai", rowId: "nsfwimage hentai"},
                {title: "Random Holo Lewd", rowId: "nsfwimage hololewd"},
                {title: "Random Lewdk", rowId: "nsfwimage lewdk"},
                {title: "Random Yuri", rowId: "nsfwimage yuri"},
                {title: "Random Lewd Kemo", rowId: "nsfwimage lewdkemo"},
                {title: "Random Lewd", rowId: "nsfwimage lewd"},
                {title: "Random Nsfw Avatar", rowId: "nsfwimage nsfw_avatar"},
                {title: "Random Ero Neko", rowId: "nsfwimage eron"},
                {title: "Random Pussy", rowId: "nsfwimage pussy_jpg"},
                {title: "Random Keta", rowId: "nsfwimage keta"},
                {title: "Random Ero Yuri", rowId: "nsfwimage eroyuri"},
                {title: "Random Cum", rowId: "nsfwimage cum_jpg"},
                {title: "Random Tits", rowId: "nsfwimage tits"},
                {title: "Random Classic", rowId: "nsfwimage classic"},
                {title: "Random Feet", rowId: "nsfwimage feet"},
                {title: "Random Gasm", rowId: "nsfwimage gasm"},
                {title: "Random Ero Feet", rowId: "nsfwimage erofeet"},
                {title: "Random Ero", rowId: "nsfwimage ero"},
                {title: "Random Solo", rowId: "nsfwimage solo"},
            ]
        },
        {
            title: "Nsfw 2",
            rows: [
                {title: "Feet [GIF]", rowId: "nsfwgif feetg"},
                {title: "BlowJob [GIF]", rowId: "nsfwgif bj"},
                {title: "Kuni [GIF]", rowId: "nsfwgif kuni"},
                {title: "Les [GIF]", rowId: "nsfwgif les"},
                {title: "Boobs [GIF]", rowId: "nsfwgif boobs"},
                {title: "Neko [GIF]", rowId: "nsfwgif ngif"},
                {title: "Cum [GIF]", rowId: "nsfwgif cum"},
                {title: "Nsfw Neko [GIF]", rowId: "nsfwgif nsfw_neko_gif"},
                {title: "Solo [GIF]", rowId: "nsfwgif solog"},
                {title: "Pussy [GIF]", rowId: "nsfwgif pussy"},
                {title: "Spank [GIF]", rowId: "nsfwgif spank"},
                {title: "Anal [GIF]", rowId: "nsfwgif anal"},
                {title: "Pwank [GIF]", rowId: "nsfwgif pwankg"},
            ]
        }]
        const listMessage = {
            text: "NekosLife [NSFW]",
            footer: `Powered By https://zenzapis.xyz`,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    }
}