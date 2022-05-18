const fs = require('fs')
const Jimp = require('jimp');

module.exports = {
	name: "setppgc",
	alias: ["ppgc"],
    use: "<reply>",
	desc: "Change This Group Photo Profile",
    type: "group",
    example: "\ndefault : %prefix%command --media reply\nwith original ratio : %prefix%command original",
    noLimit: true,
    start: async(killua, m, { mime, quoted, text, prefix, command }) => {
        if (!cekAdmin(m.sender)) return global.mess("admin", m)
        if (!cekAdmin(isBotAdmins)) return global.mess("botAdmin", m)
        if (/image/.test(mime)) {
            let media = await killua.downloadAndSaveMediaMessage(quoted)
            if (text.toLowerCase() === "original") {
                var { preview } = await generateProfilePicture(media)
                await killua.query({
                    tag: 'iq',
                    attrs: {
                        to: m.from,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [{
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: preview
                    }]
                })
                fs.unlinkSync(media)
            } else {
                await killua.updateProfilePicture(m.from, { url: media })
                .then( res => {
                    m.reply("Sukses")
                    fs.unlinkSync(media)
                }).catch(() => m.reply('err'))
            }
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
	},
    isGroup: true
}

async function generateProfilePicture(buffer) {
    const jimp = await Jimp.read(buffer)
    const min = jimp.getWidth()
    const max = jimp.getHeight()
    const cropped = jimp.crop(0, 0, min, max)
    return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG)
    }
}