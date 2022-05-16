const fs = require('fs')
const Jimp = require('jimp');

module.exports = {
	name: "setppgc",
	alias: ["ppgc"],
    use: "<reply>",
	desc: "Change This Group Photo Profile",
    type: "group",
    example: "\ndefault : %prefix%command --media reply\nwith original ratio : %prefix%command original",
    start: async(killua, m, { mime, quoted, text, prefix, command }) => {
		const { from, sender, isGroup } = m;
        const metadata = isGroup ? await killua.groupMetadata(from) : ""
		const participants = isGroup ? metadata.participants : ""
		const isAdmin = isGroup ? getAdmins(participants) : ""
        const isBotAdmin = killua.user.id.split(":")[0] + "@s.whatsapp.net"
        const cekAdmin = (i) => isAdmin.includes(i)
        if (!isGroup) return global.mess("group", m)
        if (!cekAdmin(sender)) return global.mess("admin", m)
        if (!cekAdmin(isBotAdmin)) return global.mess("botAdmin", m)
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
	}
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

function getAdmins(a) {
	let admins = [];
	for (let ids of a) {
		!ids.admin ? "" : admins.push(ids.id);
	}
	return admins;
}