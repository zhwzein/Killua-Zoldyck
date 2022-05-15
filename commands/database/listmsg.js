module.exports = {
    name: "listmsg",
    alias: ["vn","video","gif","audio","img","sticker","stiker","doc","all"].map(v => "list"+v),
    desc: "list message from database",
    type: "database",
    start: async(killua, m, { prefix, command, text }) => {
        let which = command.replace(/list/i, '')
        let database = global.db.database
        let split = Object.entries(database).map(([nama, isi]) => { return { nama, ...isi } })
        let fltr
        if (/listmsg/i.test(command)) fltr = split
        if (/listaudio/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == false)
        if (/listdoc/i.test(command)) fltr = split.filter(v => v.message.documentMessage)
        if (/listvn/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == true)
        if (/listvideo/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage && !v.message.videoMessage.gifPlayback)
        if (/listgif/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage)
        .filter(m => m.message.videoMessage.gifPlayback)
        if (/liststicker|liststiker/i.test(command)) fltr = split.filter(v => v.message.stickerMessage)
        if (/listimg/i.test(command)) fltr = split.filter(v => v.message.imageMessage)
        let list = fltr.map(v => `⬡ Name : ${v.nama}`).join("\n")
        let teks = `
「 *List Database* 」
${list}

Get Message with command ${prefix}get${which} ${text}
        `
        m.reply(teks)
    }
}
