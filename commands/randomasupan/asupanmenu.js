module.exports = {
    name: "asupanmenu",
    alias: ["menuasupan"],
    use: "[listmenu]",
    desc: "listMessage Random Asupan From Apis",
    type: "randomasupan",
    example: "%prefix%command",
    noLimit: true,
    start: async(killua, m, {}) => {
        const sections = [{
            title: "Random Asupan MP4",
            rows: [
                {title: "Random Asupan MP4", rowId: "asupan"},
                {title: "Random Asupan TikTok MP4", rowId: "asupantiktok"},
                {title: "Random Asupan Nata", rowId: "asupannatajadeh"},
                {title: "Random Asupan Aeuni", rowId: "asupanaeuni"},
            ]
        },
        {
            title: "Random Asupan Gambar",
            rows: [
                {title: "Random Cecan", rowId: "randomasupan cecan"},
                {title: "Random China", rowId: "randomasupan china"},
                {title: "Random Thailand", rowId: "randomasupan thailand"},
                {title: "Random Vietnam", rowId: "randomasupan vietnam"},
                {title: "Random Kayes", rowId: "randomasupan kayes"},
                {title: "Random NotNot", rowId: "randomasupan notnot"},
                {title: "Random Ryujin", rowId: "randomasupan ryujin"},
                {title: "Random Justina", rowId: "randomasupan justina"},
                {title: "Random Rose", rowId: "randomasupan rose"},
                {title: "Random Kpop", rowId: "randomasupan kpop"},
            ]
        }]
        const listMessage = {
            text: "Random Asupan",
            footer: config.footer,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    }
}