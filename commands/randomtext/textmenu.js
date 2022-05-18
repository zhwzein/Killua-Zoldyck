module.exports = {
    name: "textmenu",
    alias: ["menutext"],
    use: "[listmenu]",
    desc: "listMessage Random Text & Quotes",
    type: "randomtext",
    example: "%prefix%command",
    noLimit: true,
    start: async(killua, m, {}) => {
        const sections = [{
            title: "Random Text",
            rows: [
                {title: "Quotes Dilan ", rowId: "randomtext dilanquote"},
                {title: "Quotes Bucin", rowId: "randomtext bucinquote"},
                {title: "Quotes Muslim", rowId: "randomtext muslimquote"},
                {title: "Quotes Random", rowId: "randomtext randomquote"},
                {title: "Quotes Kanye", rowId: "randomtext kanyequote"},
                {title: "Quotes Galau", rowId: "randomtext galauquote"},
                {title: "Quotes Trump", rowId: "randomtext trumpquote"},
                {title: "Random Trump Think", rowId: "randomtext trumpthink"},
                {title: "Random Motivasi", rowId: "randomtext motivasi"},
                {title: "Random Katasenja", rowId: "randomtext katasenja"},
                {title: "Random Creepyfact", rowId: "randomtext creepyfact"},
                {title: "Random Faktaunik", rowId: "randomtext faktaunik"},
                {title: "Random Pantun", rowId: "randomtext pantun"},
                {title: "Random Puisi", rowId: "randomtext puisi"},
            ]
        },
        {
            title: "Random Text 2",
            rows: [
                {title: "Random Anime Quotes", rowId: "animequote"},
                {title: "Random Cerpen", rowId: "cerpen"},
                {title: "Random Cersex", rowId: "cersex"}
            ]
        }]
        const listMessage = {
            text: "Random Text",
            footer: config.footer,
            buttonText: "OPEN LIST",
            sections
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    }
}