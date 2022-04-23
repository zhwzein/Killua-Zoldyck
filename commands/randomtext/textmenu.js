module.exports = {
    name: "textmenu",
    alias: ["listmenu"],
    desc: "listMessage Random Text & Quotes",
    type: "randomtext",
    example: "Example : %prefix%command",
    exec: async(killua, m, {}) => {
        const sections = [{
            title: "Random Text",
            rows: [
                {title: "Random Motivasi", rowId: "randomtext motivasi"},
                {title: "Random Katasenja", rowId: "randomtext katasenja"},
                {title: "Random Creepyfact", rowId: "randomtext creepyfact"},
                {title: "Random Faktaunik", rowId: "randomtext faktaunik"},
                {title: "Quotes Dilan ", rowId: "randomtext dilanquote"},
                {title: "Quotes Bucin", rowId: "randomtext bucinquote"},
                //{title: "quotemuslim Quotes", rowId: "randomtext quotemuslim"},
                //{title: "quotegalau Quotes", rowId: "randomtext quotegalau"},
                //{title: "quotetrump Quotes", rowId: "randomtext quotetrump"},
                //{title: "quoteanime Quotes", rowId: "randomtext quoteanime"},
                //{title: "quoteanime2 Quotes", rowId: "randomtext quoteanime2"}
            ]
        }]

        const listMessage = {
            text: "Random Text",
            footer: `Powered By https://zenzapis.xyz`,
            buttonText: "OPEN LIST",
            sections
        
        }
        const sendMsg = await killua.sendMessage(m.from, listMessage, { quoted: m })
    }
}