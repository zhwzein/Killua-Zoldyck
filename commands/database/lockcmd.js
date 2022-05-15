module.exports = {
    name: "lockcmd",
    alias: ["lockedcmd"],
    desc: "Locked Command With Media From Database",
    type: "database",
    example: "Reply Media With Command %prefix%command",
    start: async(killua, m, { quoted, command }) => {
        if (!quoted.msg.fileSha256) return m.reply("Sha256 Hash Missing")
        let hash = quoted.msg.fileSha256.toString("hex")
        if (!(hash in global.db.sticker)) return m.reply(`Hash Not Found On Database, See List Of Commands in ${prefix}listcmd`)
        global.db.sticker[hash].locked = !/^un/i.test(command)
        m.reply("Done Locked Command From Database")
    },
    isMedia: true
}