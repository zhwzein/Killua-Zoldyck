module.exports = {
    name: "ceklimit",
    alias: ["limit"],
    desc: "Limit Check Information",
    type: "users",
    example: "%prefix%command",
    noLimit: true,
    start: async (killua, m, { isOwner }) => {
        if (m.mentions.length !== 0) {
            m.reply(`Limit left: ${premium.checkPremiumUser(m.mentions[0], isOwner, _premium) ? "Unlimited" : `${user.getLimit(m.mentions[0], _user)} / ${config.options.limitCount} Max\nLimit direset tiap pukul 00:00\n`}\nLimit Game: ${user.getLimitGame(m.mentions[0], _user)} / ${config.options.limitGame} Max\nBalance : $${user.getBalance(m.mentions[0], _user)}`)
        } else {
            m.reply(`Limit left: ${premium.checkPremiumUser(m.sender, isOwner, _premium) ? "Unlimited" : `${user.getLimit(m.sender, _user)} / ${config.options.limitCount} Max\nLimit direset tiap pukul 00:00\n`}\nLimit Game: ${user.getLimitGame(m.sender, _user)} / ${config.options.limitGame} Max\nBalance : $${user.getBalance(m.sender, _user)}`)
        }
    }
}