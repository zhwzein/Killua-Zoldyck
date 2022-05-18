module.exports = {
	name: "offline",
	alias: ["mute"],
    use: "<options>",
	desc: "Enable or disable BOT for group",
    type: "group",
    example: "%prefix%command enable or disable",
    noLimit: true,
    start: async(killua, m, { text, prefix, command }) => {
        if (!cekAdmin(m.sender)) return global.mess("admin", m)
        if (text === 'enable') {
            if (isOffline === true) return m.reply('Mute already active')
            group.addOffline(m.from, _group)
            m.reply(`Success BOT Offline For This Group\n\n_${prefix + command} disable For Unmute BOT_`)
        } else if (text === 'disable') {
            if (isOffline === false) return m.reply('Mute already deactive')
            group.delOffline(m.from, _group)
            m.reply(`Success BOT Online For This Group`)
        } else {
            m.reply('Pilih enable atau disable!')
        }
	},
    isGroup: true,
    isOffline: true
}