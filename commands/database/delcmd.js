module.exports = {
    name: "delcmd",
    alias: ["deletecmd","deletecommand"],
    desc: "Delete Command With Media From Database",
    type: "database",
    example: "Reply Media With Command %prefix%command <command>",
    exec: async(killua, m, { quoted, prefix }) => {
        let hash = quoted.msg.fileSha256.toString("hex")
        if (!hash) return m.reply("No Hash Result")
        if (!(hash in global.db.sticker)) return m.reply(`Hash Not Found On Database, See List Of Commands in ${prefix}listcmd`)
        if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
        delete global.db.sticker[hash]
        m.reply("Done Delete Command")
    }
}