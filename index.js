require("./global")
const P = require ('pino')
const { Boom } = require ('@hapi/boom')
const { default: makeWASocket, delay, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, MessageRetryMap, useMultiFileAuthState, jidNormalizedUser } = require ('@adiwajshing/baileys')
const messageHandler = require('./killua')
const fs = require("fs")
const path = require("path")
const { Collection, Simple, Store } = require("./lib")
const Welcome = require("./lib/Welcome");
const config = JSON.parse(fs.readFileSync('./config.json'))
const { serialize, WAConnection } = Simple

const Commands = new Collection()
global.prefa = /^[#$+.?_&<>!/\\]/
Commands.prefix = prefa

const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })
store.readFromFile('./session/baileys_store_multi.json')
setInterval(() => {
	store.writeToFile('./session/baileys_store_multi.json')
}, 10_000)

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in config.APIs ? config.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: config.APIs.apikey } : {}) })) : '')

const readCommands = () => {
    let dir = path.join(__dirname, "./commands")
    let dirs = fs.readdirSync(dir)
    let listCommand = {}
    try {
        dirs.forEach(async (res) => {
            let groups = res.toLowerCase()
            Commands.type = dirs.filter(v => v !== "_").map(v => v)
            listCommand[groups] = []
            let files = fs.readdirSync(`${dir}/${res}`).filter((file) => file.endsWith(".js"))
            //console.log(files)
            for (const file of files) {
                const command = require(`${dir}/${res}/${file}`)
                listCommand[groups].push(command)
                Commands.set(command.name, command)
            }
        })
        Commands.list = listCommand
    } catch (e) {
        console.error(e)
    }
}

// start a connection
const connect = async() => {
    await readCommands()
	const { state, saveCreds } = await useMultiFileAuthState('./session/baileys_auth_info')
	const { version, isLatest } = await fetchLatestBaileysVersion()
	console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    class msgRetryCounterMap {
        MessageRetryMap = {}
    }
	let connOptions = {
        version,
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        auth: state,
        msgRetryCounterMap,
    }
    const killua = new WAConnection(makeWASocket(connOptions))

    global.Store = store.bind(killua.ev)

	const sendMessageWTyping = async(msg, jid) => {
		await killua.presenceSubscribe(jid)
		await delay(500)

		await killua.sendPresenceUpdate('composing', jid)
		await delay(2000)

		await killua.sendPresenceUpdate('paused', jid)

		await killua.sendMessage(jid, msg)
	}

    killua.ev.on("group-participants.update", async (m) => {
		Welcome(killua, m);
	})

    killua.ev.on("messages.upsert", async (chatUpdate) => {
        m = serialize(killua, chatUpdate.messages[0])

        if (!m.message) return
        if (m.key && m.key.remoteJid == "status@broadcast") return
        if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return
        require("./killua")(killua, m, Commands, chatUpdate)
    })

	killua.ev.on('connection.update', async(update) => {
		const { connection, lastDisconnect } = update
		if(connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); killua.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); connect(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); connect(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); killua.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); connect(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); connect(); }
			else {
				console.log('Connection closed. You are logged out.')
			}
		}
	})

	// listen for when the auth credentials is updated
	killua.ev.on('creds.update', saveCreds)

    if (killua.user && killua.user?.id) killua.user.jid = jidNormalizedUser(killua.user?.id)
	return killua
}

connect()