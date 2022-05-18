const fs = require('fs')
const Jimp = require('jimp');

module.exports = {
	name: "setppgc",
	alias: ["ppgc"],
    use: "<reply>",
	desc: "Change This Group Photo Profile",
    type: "group",
    example: "%prefix%command",
    noLimit: true,
    start: async(killua, m, { mime, quoted, text, prefix, command }) => {
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
            return m.reply(`Reply to Supported media With Caption ${prefix + command}\n\n_default : ${prefix + command} --media reply_\n_Original Ratio : ${prefix + command} --media reply original_`)
        }
	},
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true
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