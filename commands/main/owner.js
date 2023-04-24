module.exports = {
    name: "owner",
    alias: ["owner"],
    desc: "Owner Information",
    type: "main",
    example: "%prefix%command",
    start: async (killua, m) => {
        const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:zahwazein\n'
            + 'ORG:zenzapis.xyz\n'
            + `TEL;type=CELL;type=VOICE;waid=${config.owner[0]}:${config.owner[0]}\n`
            + 'END:VCARD'
        killua.sendMessage(m.from, {
            contacts: {
                displayName: 'Jeff',
                contacts: [{ vcard }]
            }
        })
    },
    noLimit: true,
}