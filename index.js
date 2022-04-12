require("./config")
const { default: makeWASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, delay, jidNormalizedUser, makeWALegacySocket, useSingleFileLegacyAuthState, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG } = require("@adiwajshing/baileys")
const fs = require("fs")
const util = require("util")
const chalk = require("chalk")
const pino = require("pino")
const yargs = require("yargs")
const path = require("path")
const { Boom } = require("@hapi/boom")
const { Collection, Simple, Store } = require("./lib")
const { serialize, WAConnection } = Simple
const Commands = new Collection()
Commands.prefix = prefa

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

const { state, saveState } = global.opts["legacy"] ? useSingleFileLegacyAuthState(`./${sessionName.legacy}`) : useSingleFileAuthState(`./${sessionName.multi}`)

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
            console.log(files)
            for (const file of files) {
                const command = require(`${dir}/${res}/${file}`)
                listCommand[groups].push(command)
                Commands.set(command.name, command)
                delay(100)
                global.reloadFile(`${dir}/${res}/${file}`)
            }
        })
        Commands.list = listCommand
    } catch (e) {
        console.error(e)
    }
}


const connect = async () => {
    await readCommands()
    let { version, isLatest } = await fetchLatestBaileysVersion()
    let connOptions = {
        printQRInTerminal: true,
        logger: pino({ level: "silent" }),
        auth: state,
        version: [2, 2210, 9]
    }
    const killua = new WAConnection(global.opts["legacy"] ? makeWALegacySocket(connOptions) : makeWASocket(connOptions))
    global.Store = Store.bind(killua)

    killua.ev.on("creds.update", saveState)

    killua.ev.on("connection.update", async(update) => {
        if (update.connection == "open" && killua.type == "legacy") {
            killua.user = {
                id: killua.state.legacy.user.id,
                jid: killua.state.legacy.user.id,
                name: killua.state.legacy.user.name
            }
        }
        const { lastDisconnect, connection } = update
        if (connection) {
            console.info(`Connection Status : ${connection}`)
        }

        if (connection == "close") {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); killua.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); connect(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); connect(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); killua.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); connect(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); connect(); }
            else killua.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
    })

    killua.ev.on("messages.upsert", async (chatUpdate) => {
        m = serialize(killua, chatUpdate.messages[0])

        if (!m.message) return
        if (m.key && m.key.remoteJid == "status@broadcast") return
        if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return
        require("./killua")(killua, m, Commands, chatUpdate)
    })

    if (killua.user && killua.user?.id) killua.user.jid = jidNormalizedUser(killua.user?.id)
    killua.logger = (killua.type == "legacy") ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({ }) : DEFAULT_CONNECTION_CONFIG.logger.child({ })
}

connect()