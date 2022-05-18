module.exports = {
    name: "setexif",
    alias: ["exif"],
    use: "<query>",
    desc: "Change Prefix",
    type: "owner",
    example: "%prefix%command packname|author",
    start: async(killua, m, { text, prefix, command }) => {
        if (!text) return m.reply(`Example : ${prefix + command} packname|author`)
        config.exif.packname = text.split("|")[0]
        config.exif.author = text.split("|")[1]
        m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${config.exif.packname}\n⭔ Author : ${config.exif.author}`)
    },
    isOwner: true
}