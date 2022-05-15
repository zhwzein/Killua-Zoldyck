module.exports = {
    name: "delmsg",
    alias: ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'del' + v),
    use: "<query>",
    desc: "delete message from database",
    type: "database",
    example: "send command %prefix%command <name>",
    start: async(killua, m, { prefix, command, text }) => {
        let which = command.replace(/get/i, '')
        let databse = global.db.databse
        if (!(text.toLowerCase() in databse)) return m.reply(`"${text}" not saved in the database`)
        delete databse[text.toLowerCase()]
        m.reply(`Succes delete "${text}" from database`)
    },
    isQuery: true
}