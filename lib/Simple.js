const { extensionForMediaMessage, extractMessageContent, jidNormalizedUser, getContentType, normalizeMessageContent, proto, delay, downloadContentFromMessage, getBinaryNodeChild } = require('@whiskeysockets/baileys')
const baileys = require('@whiskeysockets/baileys')
const fs = require("fs")
const chalk = require("chalk")
const FileType = require("file-type")
const moment = require("moment-timezone")
const path = require("path")
const { getRandom, fetchBuffer } = require("./Function")

function nullish(args) {
    return !(args !== null && args !== undefined)
}

class WAConnection {
    constructor(conn) {
        for (let v in conn) {
            this[v] = conn[v]
        }
    }
	
    /**
     * 
     * @param {*} m 
     */
    async serializeM(m) {
        return exports.serialize(this, m)
    }

    /**
     * 
     * @param {*} text 
     * @returns 
     */
    parseMention(text) {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    /**
     * 
     * @param {*} id 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     */
    async sendText(id, text, quoted = {}, options = {}) {
        this.sendMessage(id, { text, ...options }, { quoted, ...options })
    }

    /**
     * 
     * @param {*} message 
     * @param {*} fileName 
     * @returns 
     */
    async downloadMediaMessage(message, fileName) {
        message = message?.msg ? message?.msg : message
        let mimetype = (message.msg || message).mimetype || ''
        let mtype = message.type ? message.type.replace(/Message/gi, "") : mimetype.split("/")[0]
        const stream = await downloadContentFromMessage(message, mtype)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        if (fileName) {
            let ftype = await FileType.fromBuffer(buffer)
            let trueFileName = fileName ? (fileName + "." + ftype.ext || mimetype.split("/")[1]) : getRandom(ftype.ext || mimetype.split("/")[1])
            return fs.writeFileSync(trueFileName, buffer)
        } else {
            return buffer
        }
    }

    /**
     * 
     * @param {*} message 
     * @param {*} fileName 
     * @param {*} attachExtension 
     * @returns 
     */
     async downloadAndSaveMediaMessage(message, filename, attachExtension = true) {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    /**
     * 
     * @param {*} PATH 
     * @param {*} save 
     * @returns 
     */
    async getFile(PATH, save) {
        let filename
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await fetchBuffer(PATH) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__dirname, '../temp/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            filename,
	        size: await Buffer.byteLength(data),
            ...type,
            data
        }
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} PATH 
     * @param {*} fileName 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    async sendFile(jid, PATH, fileName, quoted = {}, options = {}) {
        let types = await this.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./Sticker')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: options.packname ? options.packname : config.exif.packname, author: options.author ? options.author : config.exif.author, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await this.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
	
    /**
     * 
     * @param {*} code
     * @returns 
     */
    async groupQueryInvite(code) {
        let result = await this.query({
            tag: "iq",
            attrs: {
                type: "get",
                xmlns: "w:g2",
                to: "@g.us"
            },
            content: [{ tag: "invite", attrs: { code } }]
        })
        let group = getBinaryNodeChild(result, "group")
        let descRes = getBinaryNodeChild(group, "description")
        let desc, descId, descOwner, descTime 
        if (descRes) {
            desc = getBinaryNodeChild(descRes, "body")?.content?.toString(),
            descId = descRes?.attrs?.id,
            descOwner = descRes?.attrs?.participant,
            descTime = descRes?.attrs?.t
        }
        const hasil = {
            id: group?.attrs?.id.includes("@") ? group?.attrs?.id : group?.attrs?.id + "@g.us",
            owner: group?.attrs?.creator,
            subject: group?.attrs?.subject,
            subjectOwner: group?.attrs?.s_o,
            subjectTime: group?.attrs?.s_t,
            size: group?.attrs?.size,
            creation: group?.attrs?.creation,
            participants: group?.content?.filter(v => v.tag == "participant").map(v => v.attrs),
            desc,
            descId,
            descOwner,
            descTime
        }

        return hasil
    }
    
    async sendButton(jid, text = '', footer = '', buffer, buttons, quoted, options) {
        let file
        if (Array.isArray(buffer)) (
            options = quoted,
            quoted = buttons,
            buttons = buffer,
            buffer = null
        )
        else if (buffer) {
            try {
                file = await this.getFile(buffer)
                buffer = file.data
            } catch (e) {
                console.error(e)
                file = buffer = null
            }
        }

        if (!Array.isArray(buttons[0]) && typeof buttons[0] === 'string') buttons = [buttons]
        if (!options) options = {}
        let message = {
            ...options,
            mentions: [...this.parseMention(text)]
            ,
            [buffer ? 'caption' : 'text']: text || '',
            footer,
            buttons: buttons.map(btn => ({
                buttonId: !nullish(btn[1]) && btn[1] || !nullish(btn[0]) && btn[0] || '',
                buttonText: {
                    displayText: !nullish(btn[0]) && btn[0] || !nullish(btn[1]) && btn[1] || ''
                }
            })),
            ...(buffer ?
                options.asLocation && /image/.test(file.mime) ? {
                    location: {
                        ...options,
                        jpegThumbnail: await file.toBuffer()
                    }
                } : {
                    [/video/.test(file.mime) ? 'video' : /image/.test(file.mime) ? 'image' : 'document']: buffer,
                    mimetype: options?.mimetype ? options.mimetype : file.mime
                } : {})
        }
        let error = false
        try {
            return await this.sendMessage(jid, message, {
                quoted,
                upload: this.waUploadToServer,
                ...options
            })
        } catch (e) {
            console.error(error = e)
        }
    }
    
    async sendList(jid, title, text, footer, buttonText, listSections, quoted, options) {
        if (!options) options = {}
        // send a list message!
        const sections = listSections.map(([title, rows]) => ({
            title: !nullish(title) && title || !nullish(rowTitle) && rowTitle || '',
            rows: rows.map(([rowTitle, rowId, description]) => ({
                title: !nullish(rowTitle) && rowTitle || !nullish(rowId) && rowId || '',
                rowId: !nullish(rowId) && rowId || !nullish(rowTitle) && rowTitle || '',
                description: !nullish(description) && description || ''
            }))
        }))

        const listMessage = {
            text,
            footer,
            title,
            buttonText,
            sections,
            ...options
        }
        return this.sendMessage(jid, listMessage, {
            quoted,
            ...options
        })
    }
}
exports.WAConnection = WAConnection

exports.serialize = (conn, m, options = {}) => {
    if (!m) return m
    let M = proto.WebMessageInfo
    m = M.fromObject(m)
    if (m.key) {
        m.from = jidNormalizedUser(m.key.remoteJid || m.key.participant)
        m.fromMe = m.key.fromMe
        m.id = m.key.id
        m.isBot = m.id.startsWith("BAE5") && m.id.length == 16
        m.isGroup = m.from.endsWith("@g.us")
        m.sender = jidNormalizedUser(m.fromMe && conn.user?.id || m.key.participant || m.from || "")
    }
    if (m.message) {
        m.type = getContentType(m.message)
        m.message = extractMessageContent(m.message)
        m.msg = m.message[m.type]
        m.mentions = m.msg?.contextInfo ? m.msg?.contextInfo.mentionedJid : []
        m.quoted = m.msg?.contextInfo ? m.msg?.contextInfo.quotedMessage : null
        if (m.quoted) {
            m.quoted.type = getContentType(m.quoted)
            m.quoted.msg = m.quoted[m.quoted.type]
            m.quoted.mentions = m.msg.contextInfo.mentionedJid
            m.quoted.id = m.msg.contextInfo.stanzaId
            m.quoted.sender = jidNormalizedUser(m.msg.contextInfo.participant || m.sender)
            m.quoted.from = m.from
            m.quoted.isGroup = m.quoted.from.endsWith("@g.us")
            m.quoted.isBot = m.quoted.id.startsWith("BAE5") && m.quoted.id == 16
            m.quoted.fromMe = (m.quoted.sender == jidNormalizedUser(conn.user && conn.user?.id))
            m.quoted.text = m.quoted.msg?.text || m.quoted.msg?.caption || m.quoted.msg?.conversation || m.quoted.msg?.contentText || m.quoted.msg?.selectedDisplayText || m.quoted.msg?.title || ""
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.from,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: m.quoted,
                ...(m.quoted.isGroup ? { participant: m.quoted.sender } : {})
            })
            m.quoted.delete = () => conn.sendMessage(m.quoted.from, { delete: vM.key })
            m.quoted.download = (pathFile) => conn.downloadMediaMessage(m.quoted.msg, pathFile)
        }
    }
    m.download = (pathFile) => conn.downloadMediaMessage(m.msg, pathFile)
    m.body = m.text = m.message?.conversation || m.message?.[m.type]?.text || m.message?.[m.type]?.caption || m.message?.[m.type]?.contentText || m.message?.[m.type]?.selectedDisplayText || m.message?.[m.type]?.title || ""
    m.reply = (text, chatId = m.from, options = {}) => Buffer.isBuffer(text) ? conn.sendFile(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })

    return m
}
