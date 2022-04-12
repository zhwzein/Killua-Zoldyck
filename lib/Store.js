const { proto, DEFAULT_CONNECTION_CONFIG, toNumber, updateMessageWithReceipt, jidNormalizedUser } = require("@adiwajshing/baileys")
const make_ordered_dictionary_1 = require("@adiwajshing/baileys/lib/Store/make-ordered-dictionary")
const waChatKey = (pin) => ({
    key: (c) => (pin ? (c.pin ? '1' : '0') : '') + (c.archive ? '0' : '1') + (c.conversationTimestamp ? c.conversationTimestamp.toString(16).padStart(8, '0') : '') + c.id,
    compare: (k1, k2) => k2.localeCompare(k1)
})
const waMessageID = (m) => m.key.id
const makeMessagesDictionary = () => make_ordered_dictionary_1.default(waMessageID)
const logger = DEFAULT_CONNECTION_CONFIG.logger.child({ })
const chatKey = waChatKey(true)
const KeyedDB = require('@adiwajshing/keyed-db').default


function bind(killua) {
    const chats = new KeyedDB(chatKey, c => c.id)
    const messages = {}
    const contacts = {}
    const groupMetadata = {}
    const presences = {}
    const state = { connection: 'close' }
    const assertMessageList = (jid) => {
        if (!messages[jid]) {
           messages[jid] = makeMessagesDictionary()
       }
        return messages[jid]
    }
    const contactsUpsert = (newContacts) => {
        const oldContacts = new Set(Object.keys(contacts))
        for (const contact of newContacts) {
            oldContacts.delete(contact.id)
            contacts[contact.id] = Object.assign(contacts[contact.id] || {}, contact)
        }
        return oldContacts
    }

    killua.ev.on('connection.update', update => {
        Object.assign(state, update)
    })

    killua.ev.on('chats.set', ({ chats: newChats, isLatest }) => {
        /**if (isLatest) {
            chats.clear()
        }**/
        const chatsAdded = chats.insertIfAbsent(...newChats).length
        logger.debug({ chatsAdded }, 'synced chats')
    })

    killua.ev.on('contacts.set', ({ contacts: newContacts }) => {
        const oldContacts = contactsUpsert(newContacts)
        for (const jid of oldContacts) {
            delete contacts[jid]
        }
        logger.debug({ deletedContacts: oldContacts.size, newContacts }, 'synced contacts')
    })

    killua.ev.on('messages.set', ({ messages: newMessages, isLatest }) => {
        if (isLatest) {
            for (const id in messages) {
                delete messages[id]
            }
        }
        for (const msg of newMessages) {
            const jid = msg.key.remoteJid
            const list = assertMessageList(jid)
            list.upsert(msg, 'prepend')
        }
        logger.debug({ messages: newMessages.length }, 'synced messages')
    })

   killua.ev.on('contacts.update', updates => {
        for (const update of updates) {
            Object.assign(contacts[update.id], update)
        }
    })

    killua.ev.on('chats.upsert', newChats => {
        chats.upsert(...newChats)
    })

    killua.ev.on('messages.delete', item => {
        if ('all' in item) {
            const list = messages[item.jid]
            list === null || list === void 0 ? void 0 : list.clear()
        }
        else {
            const jid = item.keys[0].remoteJid
            const list = messages[jid]
            if (list) {
                const idSet = new Set(item.keys.map(k => k.id));
                list.filter(m => !idSet.has(m.key.id))
            }
        }
    })

    killua.ev.on('chats.delete', deletions => {
        for (const item of deletions) {
            chats.deleteById(item)
        }
    })

    killua.ev.on('chats.update', updates => {
        for (let update of updates) {
            const result = chats.update(update.id, chat => {
                if (update.unreadCount > 0) {
                    update = { ...update }
                    update.unreadCount = chat.unreadCount + update.unreadCount
                }
                Object.assign(chat, update)
            })
            if (!result) {
                logger.debug({ update }, 'got update for non-existant chat')
            }
        }
    })

    killua.ev.on('presence.update', ({ id, presences: update }) => {
        presences[id] = presences[id] || {}
        Object.assign(presences[id], update)
    })

    killua.ev.on('messages.upsert', ({ messages: newMessages, type }) => {
        switch (type) {
            case 'append':
            case 'notify':
                for (const msg of newMessages) {
                    const jid = jidNormalizedUser(msg.key.remoteJid)
                    const list = assertMessageList(jid)
                    list.upsert(msg, 'append')
                    if (type === 'notify') {
                        if (!chats.get(jid)) {
                            killua.ev.emit('chats.upsert', [
                                {
                                    id: jid,
                                    conversationTimestamp: toNumber(msg.messageTimestamp),
                                    unreadCount: 1
                                }
                            ])
                        }
                    }
                }
                break
        }
    })

    /**killua.ev.on('messages.update', updates => {
        for (const { update, key } of updates) {
            const list = assertMessageList(key.remoteJid)
            const result = list.updateAssign(key.id, update)
            if (!result) {
                logger.debug({ update }, 'got update for non-existent message')
            }
        }
    })**/

    killua.ev.on('groups.update', updates => {
        for (const update of updates) {
            if (groupMetadata[update.id]) {
                Object.assign(groupMetadata[update.id], update)
            }
            else {
                logger.debug({ update }, 'got update for non-existant group metadata')
            }
        }
    })

    killua.ev.on('group-participants.update', ({ id, participants, action }) => {
        const metadata = groupMetadata[id]
        if (metadata) {
            switch (action) {
                case 'add':
                    metadata.participants.push(...participants.map(id => ({ id, isAdmin: false, isSuperAdmin: false })))
                    break
                case 'demote':
                case 'promote':
                    for (const participant of metadata.participants) {
                        if (participants.includes(participant.id)) {
                            participant.isAdmin = action === 'promote'
                        }
                    }
                    break
                case 'remove':
                    metadata.participants = metadata.participants.filter(p => !participants.includes(p.id))
                    break
            }
        }
    })

    killua.ev.on('message-receipt.update', updates => {
        for (const { key, receipt } of updates) {
            const obj = messages[key.remoteJid]
            const msg = obj === null || obj === void 0 ? void 0 : obj.get(key.id)
            if (msg) {
                updateMessageWithReceipt(msg, receipt)
            }
        }
    })

    const toJSON = () => ({
        chats,
        contacts,
        messages
    })
    const fromJSON = (json) => {
        chats.upsert(...json.chats)
        contactsUpsert(Object.values(json.contacts))
        for (const jid in json.messages) {
            const list = assertMessageList(jid)
            for (const msg of json.messages[jid]) {
                list.upsert(proto.WebMessageInfo.fromObject(msg), 'append')
            }
        }
    }

    return {
        chats,
        contacts,
        messages,
        groupMetadata,
        state,
        presences,
        bind,
        /** loads messages from the store, if not found -- uses the legacy connection */
        loadMessages: async (jid, count, cursor) => {
            const list = assertMessageList(jid)
            const retrieve = async (count, cursor) => {
                const result = await (killua === null || killua === void 0 ? void 0 : killua.fetchMessagesFromWA(jid, count, cursor))
                return result || []
            }
            const mode = !cursor || 'before' in cursor ? 'before' : 'after'
            const cursorKey = !!cursor ? ('before' in cursor ? cursor.before : cursor.after) : undefined
            const cursorValue = cursorKey ? list.get(cursorKey.id) : undefined
            let messages
            if (list && mode === 'before' && (!cursorKey || cursorValue)) {
                if (cursorValue) {
                    const msgIdx = list.array.findIndex(m => m.key.id === cursorKey.id)
                    messages = list.array.slice(0, msgIdx)
                }
                else {
                    messages = list.array
                }
                const diff = count - messages.length
                if (diff < 0) {
                    messages = messages.slice(-count) // get the last X messages
                }
                else if (diff > 0) {
                    const [fMessage] = messages
                    const cursor = { before: (fMessage === null || fMessage === void 0 ? void 0 : fMessage.key) || cursorKey }
                    const extra = await retrieve(diff, cursor)
                    // add to DB
                    for (let i = extra.length - 1; i >= 0; i--) {
                        list.upsert(extra[i], 'prepend')
                    }
                    messages.splice(0, 0, ...extra)
                }
            }
            else {
                messages = await retrieve(count, cursor)
            }
            return messages
        },
        loadMessage: async (jid, id) => {
            var _a
            let message = (_a = messages[jid]) === null || _a === void 0 ? void 0 : _a.get(id)
            if (!message) {
                message = await (killua === null || killua === void 0 ? void 0 : killua.loadMessageFromWA(jid, id))
            }
            return message
        },
        mostRecentMessage: async (jid) => {
            var _a
            let message = (_a = messages[jid]) === null || _a === void 0 ? void 0 : _a.array.slice(-1)[0]
            if (!message) {
                const [result] = await (killua === null || killua === void 0 ? void 0 : killua.fetchMessagesFromWA(jid, 1, undefined))
                message = result
            }
            return message
        },
        fetchImageUrl: async (jid) => {
            const contact = contacts[jid]
            if (!contact) {
                return killua === null || killua === void 0 ? void 0 : killua.profilePictureUrl(jid)
            }
            if (typeof contact.imgUrl === 'undefined') {
                contact.imgUrl = await (killua === null || killua === void 0 ? void 0 : killua.profilePictureUrl(jid))
            }
            return contact.imgUrl
        },
        fetchGroupMetadata: async (jid) => {
            if (!groupMetadata[jid]) {
                groupMetadata[jid] = await (killua === null || killua === void 0 ? void 0 : killua.groupMetadata(jid))
            }
            return groupMetadata[jid]
        },
        fetchBroadcastListInfo: async (jid) => {
            if (!groupMetadata[jid]) {
                groupMetadata[jid] = await (killua === null || killua === void 0 ? void 0 : killua.getBroadcastListInfo(jid))
            }
            return groupMetadata[jid]
        },
        fetchMessageReceipts: async ({ remoteJid, id }) => {
            const list = messages[remoteJid]
            const msg = list === null || list === void 0 ? void 0 : list.get(id)
            let receipts = msg.userReceipt
            if (!receipts) {
                receipts = await (killua === null || killua === void 0 ? void 0 : killua.messageInfo(remoteJid, id))
                if (msg) {
                    msg.userReceipt = receipts
                }
            }
            return receipts
        },
        toJSON,
        fromJSON,
        writeToFile: (path) => {
            // require fs here so that in case "fs" is not available -- the app does not crash
            const { writeFileSync } = require('fs')
            writeFileSync(path, JSON.stringify(toJSON()))
        },
        readFromFile: (path) => {
            // require fs here so that in case "fs" is not available -- the app does not crash
            const { readFileSync, existsSync } = require('fs')
            if (existsSync(path)) {
                logger.debug({ path }, 'reading from file')
                const jsonStr = readFileSync(path, { encoding: 'utf-8' })
                const json = JSON.parse(jsonStr)
                fromJSON(json)
            }
        }
    }
}

module.exports = { bind }