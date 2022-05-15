module.exports = {
    name: "setexif",
    alias: ["exif"],
    use: "<query>",
    desc: "Change Prefix",
    type: "owner",
    example: "%prefix%command packname|author",
    start: async(killua, m, { text, prefix, command }) => {
        if (!text) return m.reply(`Example : ${prefix + command} packname|author`)
        global.packname = text.split("|")[0]
        global.author = text.split("|")[1]
        m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
    },
    isOwner: true
}