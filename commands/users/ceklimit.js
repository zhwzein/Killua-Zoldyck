module.exports = {
    name: "ceklimit",
    alias: ["limit"],
    desc: "Limit Check Information",
    type: "users",
    example: "%prefix%command",
    noLimit: true,
    start: async(killua, m, {}) => {
        if (m.mentions.length !== 0) {
			m.reply(`Limit left: ${user.checkPremiumUser(m.mentions[0], _user) ? "Unlimited" : `${user.getLimit(m.mentions[0], _user)} / ${config.options.limitCount} Max\nLimit direset tiap pukul 06:00 WIB\n`
            }\nBalance : $${user.getBalance(m.mentions[0],_user)}`)
		} else {
			m.reply(`Limit left: ${user.checkPremiumUser(m.sender, _user) ? "Unlimited" : `${user.getLimit(m.sender, _user)} / ${config.options.limitCount} Max\nLimit direset tiap pukul 06:00 WIB\n`
            }\nBalance : $${user.getBalance(m.sender, _user)}`)
		}
    }
}