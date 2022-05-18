module.exports = {
	name: "antidelete",
	alias: ["antidel"],
    use: "<options>",
	desc: "Enable or disable Antidelete Features",
    type: "group",
    example: "%prefix%command enable or disable",
    noLimit: true,
    start: async(killua, m, { text }) => {
        if (text === 'enable') {
            if (isAntidelete === true) return m.reply('Antidelete already active')
            group.addAntidelete(m.from, _group)
            m.reply(`Success activated Antidelete`)
        } else if (text === 'disable') {
            if (isAntidelete === false) return m.reply('Antidelete already deactive')
            group.delAntidelete(m.from, _group)
            m.reply(`Success deactivated Antidelete`)
        } else {
            m.reply(`*⭔ Antidelete Status:* ${group.cekAntidelete(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_Pilih enable atau disable!_`)
        }
	},
    isGroup: true,
    isAdmin: true,
}