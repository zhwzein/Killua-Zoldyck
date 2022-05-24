module.exports = {
    name: "setcmd",
    alias: ["addcmd","addcommand"],
    use: "<query>",
    desc: "Add Command With Media To Database",
    type: "database",
    example: "Reply Media With Command %prefix%command <command>",
    start: async(killua, m, { quoted, text }) => {
        if (!quoted.msg.fileSha256) return m.reply('Sha256 Hash Missing')
        let hash = quoted.msg.fileSha256.toString("hex")
        if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
        global.db.sticker[hash] = {
            text,
            //mentions: quoted.mentions,
            creator: m.sender,
            createAt: + new Date,
            locked: false
        },
        m.reply("Succes Add Media To Command")
    },
    isMedia: true,
    isQuery: true
}