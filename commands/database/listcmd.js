module.exports = {
    name: "listcmd",
    alias: ["listcommand"],
    desc: "List Command With Media From Database",
    type: "database",
    start: async(killua, m, { quoted }) => {
        let text = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}.\nHash : ${value.locked ? `*${key}*` : key}\nCommand ${value.text}\nCreator : @${value.creator.split("@")[0]}\nCrete At : ${new Date(value.createAt)}`).join('\n')}        
        `
        killua.sendMessage(m.from, { text, mentions: killua.parseMention(text) }, { quoted: m })
    }
}