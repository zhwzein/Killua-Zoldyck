const { proto } = require("@adiwajshing/baileys")

module.exports = {
    name: "addmsg",
    alias: ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v),
    use: "<query>",
    desc: "Add Message to Database",
    type: "database",
    example: "Reply or send message with caption %prefix%command <name>",
    start: async(killua, m, { prefix, command, text, quoted }) => {
        let M = proto.WebMessageInfo
        let which = command.replace(/\+|add/i, '')
        let database = global.db.database
        if (text.toLowerCase() in database) return m.reply(`"${text}" has been saved in the database`)
        database[text.toLowerCase()] = M.fromObject(m.quoted ? quoted.fakeObj : m).toJSON()
        m.reply(`Succesfully added message in list as "${text}"

Get Message with command ${prefix}get${which} ${text}

View message list with command ${prefix}list${which}
        `)
    },
    isQuery: true
}