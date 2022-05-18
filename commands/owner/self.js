const fs = require("fs")

module.exports = {
    name: "self",
    alias: ["smode"],
    use: "<options>",
    desc: "Enable or disable Self Mode",
    type: "owner",
    example: "%prefix%command enable or disable",
    start: async(killua, m, { text, prefix, command }) => {
        if (text === 'enable') {
            if (config.options.self == true) return m.reply('Self already active')
            config.options.self = true
            fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
            m.reply(`BOT Now In Self Mode`)
        } else if (text === 'disable') {
            if (config.options.self === false) return m.reply('Self already deactive')
            config.options.self = false
            fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
            m.reply(`BOT Now In Public Mode`)
        } else {
            m.reply(`*⭔ Self Mode Status:* ${config.options.self ? 'Activated' : 'Deactivated'}\n\n_Pilih enable atau disable!_`)
        }
    },
    isOwner: true
}