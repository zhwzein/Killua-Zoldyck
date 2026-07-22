const fs = require("fs")

module.exports = {
    name: "autoread",
    alias: ["aread"],
    use: "<options>",
    desc: "Enable or disable AutoRead Mode",
    type: "owner",
    example: "%prefix%command enable or disable",
    start: async(killua, m, { text, prefix, command }) => {
        if (text === 'enable') {
            if (config.options.autoRead == true) return m.reply('AutoRead already active')
            config.options.autoRead = true
            global.saveConfig()
            m.reply(`AutoRead Success activated`)
        } else if (text === 'disable') {
            if (config.options.autoRead === false) return m.reply('AutoRead already deactive')
            config.options.autoRead = false
            global.saveConfig()
            m.reply(`AutoRead Success deactivated`)
        } else {
            m.reply(`*⭔ AutoRead Status:* ${config.options.autoRead ? 'Activated' : 'Deactivated'}\n\n_Pilih enable atau disable!_`)
        }
    },
    isOwner: true
}