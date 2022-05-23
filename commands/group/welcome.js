module.exports = {
	name: "Welcome",
	alias: ["welcome"],
    use: "<options>",
	desc: "Enable or disable Welcome Features",
    type: "group",
    example: "%prefix%command enable or disable",
    noLimit: true,
    start: async(killua, m, { text }) => {
        if (text === 'enable') {
            if (isAntidelete === true) return m.reply('Welcome already active')
            group.addWelcome(m.from, _group)
            m.reply(`Success activated Welcome`)
        } else if (text === 'disable') {
            if (isAntidelete === false) return m.reply('Welcome already deactive')
            group.delWelcome(m.from, _group)
            m.reply(`Success deactivated Welcome`)
        } else {
            let buttons = [
                { buttonId: `Welcome enable `, buttonText: { displayText: 'ENABLE'}, type: 1 },
                 {buttonId: `Welcome disable `, buttonText: { displayText: 'DISABLE'}, type: 1 }
            ]
            let buttonMessage = {
                text: `*⭔ Welcome Status:* ${group.cekWelcome(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_Pilih enable atau disable!_`,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
	},
    isGroup: true,
    isAdmin: true,
}