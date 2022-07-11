require("./global")
const { generateWAMessage, areJidsSameUser, proto } = require("@adiwajshing/baileys")
const { Simple, Collection, Function } = require("./lib")
const { isUrl, isNumber } = Function
const Func = require("./lib")
const fs = require("fs")
const moment = require("moment-timezone")
const chalk = require("chalk")
const { correct } = require("./lib/Correct")

global.config = JSON.parse(fs.readFileSync('./config.json'))
global.db = JSON.parse(fs.readFileSync("./database/db.json"))
if (global.db) global.db = {
    sticker: {},
    database: {},
    chats: {},
    game: {},
    ...(global.db || {})
}

// Entertainment
global.siapakah = db.game.siapakah = {}
global.caklontong = db.game.caklontong = {}
global.family100 = db.game.family100 = {}
global.tebakkalimat = db.game.tebakkalimat = {}
global.tebakkata = db.game.tebakkata = {}
global.asahotak = db.game.asahotak = {}
global.susunkata = db.game.susunkata = {}
global.tebakbendera = db.game.tebakbendera = {}
global.tebakgambar = db.game.tebakgambar = {}
global.tebakkabupaten = db.game.tebakkabupaten = {}
global.tebaklagu = db.game.tebaklagu = {}
global.tekateki = db.game.tekateki = {}
global.tebaklirik = db.game.tebaklirik = {}
global.tebaktebakan = db.game.tebaktebakan = {}

module.exports = async (killua, m, commands, chatUpdate) => {
    try {
        let { type, isGroup, sender, from } = m
        let body = (type == "buttonsResponseMessage") ? m.message[type].selectedButtonId : (type == "listResponseMessage") ? m.message[type].singleSelectReply.selectedRowId : (type == "templateButtonReplyMessage") ? m.message[type].selectedId : m.text 
        let metadata = isGroup ? await killua.groupMetadata(from) : {}
        let pushname = isGroup ? metadata.subject : m.pushName
        let participants = isGroup ? metadata.participants : [sender]
        let groupAdmin = isGroup ? participants.filter(v => v.admin !== null).map(v => v.id) : []
        let isBotAdmin = isGroup ? groupAdmin.includes(killua.user?.jid) : false
        let isAdmin = isGroup ? groupAdmin.includes(sender) : false
        let isOwner = [killua.user?.jid, ...config.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(sender)
        
        global.isPremium = user.checkPremiumUser(m.sender, isOwner, _user)
        global.isAntidelete = group.cekAntidelete(m.from, _group)
        global.isOffline = group.cekOffline(from, _group)
        global.isAntilink = group.cekAntilink(m.from, _group)

        user.expiredCheck(killua, m, _user);
        if (config.options.self && !isOwner && !m.fromMe) return

        var prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : Function.checkPrefix(prefa, body).prefix ?? "#"

        let isCmd = body.startsWith(prefix)
        let quoted = m.quoted ? m.quoted : m
        let mime = (quoted.msg || m.msg).mimetype
        let isMedia = /image|video|sticker|audio/.test(mime)
        let budy = (typeof m.text == "string" ? m.text : "")
        let args = body.trim().split(/ +/).slice(1)
        let ar = args.map((v) => v.toLowerCase())
        let text = q = args.join(" ")
        let cmdName = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const cmd = commands.get(cmdName) || Array.from(commands.values()).find((v) => v.alias.find((x) => x.toLowerCase() == cmdName)) || ""

        if (isOffline && cmdName && !isOwner && !cmd.isOffline) return
        if (isGroup) group.addGroup(m.from)
        user.addUser(m.sender, m.pushName, _user)
        
        if (m.message && isGroup) {
            console.log("" + "\n" + chalk.black(chalk.bgWhite('[ GRUP ]')), chalk.black(chalk.bgBlueBright(isGroup ? metadata.subject : m.pushName)) + "\n" + chalk.black(chalk.bgWhite('[ TIME ]')), chalk.black(chalk.bgBlueBright(new Date)) + "\n" + chalk.black(chalk.bgWhite('[ FROM ]')), chalk.black(chalk.bgBlueBright(m.pushName + " @" + m.sender.split('@')[0])) + "\n" + chalk.black(chalk.bgWhite('[ BODY ]')), chalk.black(chalk.bgBlueBright(body || type)) + "\n" + "")
        }
        if (m.message && !isGroup) {    
            console.log("" + "\n" + chalk.black(chalk.bgWhite('[ PRIV ]')), chalk.black(chalk.bgRedBright('PRIVATE CHATT')) + "\n" + chalk.black(chalk.bgWhite('[ TIME ]')), chalk.black(chalk.bgRedBright(new Date)) + "\n" + chalk.black(chalk.bgWhite('[ FROM ]')), chalk.black(chalk.bgRedBright(m.pushName + " @" + m.sender.split('@')[0])) + "\n" + chalk.black(chalk.bgWhite('[ BODY ]')), chalk.black(chalk.bgRedBright(body || type)) + "\n" + "")
        }

        // STICKER COMMAND
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString("hex") in global.db.sticker)) {
            let hash = global.db.sticker[m.msg.fileSha256.toString("hex")]
            let { text, mentions } = hash
            let messages = await generateWAMessage(m.from, { text, mentions }, {
                userJid: killua.user.jid,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = await areJidsSameUser(m.sender, killua.user.jid)
            messages.key.id = m.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: "append"
            }
            killua.ev.emit("messages.upsert", msg)
        }

        // DATABASE
        try {
            let chat = global.db.chats[m.from]
            if (typeof chat !== "object") global.db.chats = {}
            if (chat) {
                if (!('antidelete' in chat)) chat.antidelete = true
            } else global.db.chats[m.from] = {
                antidelete: true
            }
        } catch(e) {
            console.error(e)
        }

        setInterval(() => {
            fs.writeFileSync('./database/db.json', JSON.stringify(global.db, null, 2))
        }, 15 * 1000)

        // ANTILINK
        if (isGroup && isBotAdmin && isAntilink && !isAdmin && !isOwner) {
            if (budy.match("://chat.whatsapp.com/")) {
                setTimeout( () => {
                    killua.groupParticipantsUpdate(from, [sender], "remove")
                }, 5 * 1000)
                setTimeout( () => {
                    m.reply('*⭔ Link Group Detected!*\n_Sorry you will be kicked from this group!_')
                }, 0)
            }
        }

        // ANTI DELETE
        if (isAntidelete && m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
            if (!db.chats[m.from].antidelete) return
            let key = m.message.protocolMessage.key
            let msg = await killua.serializeM(await Store.loadMessage(key.remoteJid, key.id))
            let teks = `「 Message Delete Detect 」\n\n⬡ Name : ${msg.pushName}\n⬡ User : @${msg.sender.split("@")[0]}\n⬡ Date : ${moment(msg.messageTimestamp * 1000).tz(config.timezone)}\n⬡ Type : ${msg.type}\n`
            let tekss = teks.replace("GMT+0700", "")
            killua.relayMessage(m.from, msg.message, { messageId: msg.id })
            await killua.sendText(m.from, tekss, msg, { mentions: [msg.sender] })
        }
        
        // ENTERTAINMENT
        try {
            if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = asahotak[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'asahotak', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete asahotak[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = caklontong[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'caklontong', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete caklontong[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (family100.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = family100[m.sender.split('@')[0]]
                result = Array.from(jawaban).find((v) => v === budy)
                if (budy.toLowerCase() == result) {
                    await killua.sendMessage(m.from, { text:`Benar Salah Satu Jawabanya Adalah ${budy} Selamat 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'family100', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete family100[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (siapakah.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = siapakah[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'siapakah', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete siapakah[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = susunkata[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'susunkata', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete susunkata[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebakbendera[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebakbendera', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebakbendera[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebakgambar', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebakgambar[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebakkabupaten[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebakkabupaten', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebakkabupaten[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebakkalimat[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebakkalimat', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebakkalimat[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebakkata[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebakkata', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebakkata[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebaklagu[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebaklagu', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebaklagu[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tekateki[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tekateki', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tekateki[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebaklirik[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebaklirik', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebaklirik[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
            if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
                jawaban = tebaktebakan[m.sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await killua.sendMessage(m.from, { text:`Selamat Jawaban ${budy} Benar 🎉\n\nIngin bermain lagi? Tekan Tombol Lanjut dibawah\n`, footer:'Entertainment\nPowered By https://zenzapis.xyz', buttons:[{ buttonId:'tebaktebakan', buttonText:{ displayText:'Lanjut'}, type:1 }], headerType:4 }, { quoted: m })
                    delete tebaktebakan[m.sender.split('@')[0]]
                } else m.reply('*Jawaban Salah!*')
            }
        } catch (e) {
            console.error(e)
        }

        /* uncomment jika ingin menggunakan
        if (!isOffline && isCmd && !cmd) {
            var array = Array.from(commands.keys());
            Array.from(commands.values()).map((v) => v.alias).join(" ").replace(/ +/gi, ",").split(",").map((v) => array.push(v))
            
            var anu = correct(cmdName, array)
            var alias = commands.get(anu.result) || Array.from(commands.values()).find((v) => v.alias.find((x) => x.toLowerCase() == anu.result)) || ""
            teks = `Command Not Found!\nMaybe you mean is\n\n*_Command :_* ${prefix + anu.result}\n*_Alias :_* ${alias.alias.join(", ")}\n\n_Send command again if needed_`
            m.reply(teks)
        } else if (!cmd) return

        if (cmd.isPremium && !isPremium) {
			return global.mess("premium", m)
		}

        if (cmd.isLimit && !isPremium) {
            if (user.isLimit(m.sender, isPremium, isOwner, config.options.limitCount, _user) && !m.fromMe)
            return m.reply(`Your limit has run out, please send ${prefix}limit to check the limit`);
            user.limitAdd(m.sender, isPremium, isOwner, _user);
        }*/

        if (cmd.isMedia && !isMedia) {
            return global.mess("media", m)
        }

        if (cmd.isOwner && !isOwner) {
			return global.mess("owner", m)
		}

        if (cmd.isGroup && !isGroup) {
            return global.mess("group", m)
        }

        if (cmd.isPrivate && isGroup) {
            return global.mess("private", m)
        }

        if (cmd.isBotAdmin && !isBotAdmin) {
            return global.mess("botAdmin", m)
        }

        if (cmd.isAdmin && !isAdmin) {
            return global.mess("admin", m)
        }

        if (cmd.isBot && m.fromMe) {
            return global.mess("bot", m)
        }

        if (cmd.disable == true && cmd.disable == false) {
            return global.mess("dead", m)
        }

        if (cmd.desc && text.endsWith("--desc")) return m.reply(cmd.desc)
        if (cmd.example && text.endsWith("--use")) {
            return m.reply(`${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
        }

        if (cmd.isQuery && !text) {
            return m.reply(`${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
        }

        try {
			if (cmd && !cmd.noLimit) {
                if (user.isLimit(m.sender, isPremium, isOwner, config.options.limitCount, _user) && !m.fromMe)
				return m.reply(`Your limit has run out, please send ${prefix}limit to check the limit`);
				user.limitAdd(m.sender, isPremium, isOwner, _user);
			}
			cmd.start(killua, m, {
                name: 'killua Zoldyck',
                metadata,
                pushName: pushname,
                participants,
                body,
                args,
                ar,
                text,
                quoted,
                mime,
                prefix,
                command: cmd.name,
                commands,
                Function: Func,
                toUpper: function toUpper(query) {
                    return query.replace(/^\w/, c => c.toUpperCase())
                }
            })
		} catch (e) {
            e = String(e)
            if (!e.includes("cmd.start"))
			console.error(e);
		}
    } catch (e) {
        console.log(e)
    }
}
