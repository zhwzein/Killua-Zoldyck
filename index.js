require('dotenv').config()

const fs = require("fs")
const path = require("path")

global.config = {
    APIs: {
        zenz: process.env.API_ZENZ || "https://api.andaraz.com",
        apikey: process.env.API_KEY || "YOURAPIKEY"
    },
    options: {
        autoRead: process.env.AUTO_READ === 'true',
        self: process.env.SELF_MODE === 'true',
        limitCount: parseInt(process.env.LIMIT_COUNT || '20', 10),
        limitGame: parseInt(process.env.LIMIT_GAME || '20', 10)
    },
    exif: {
        packname: process.env.EXIF_PACKNAME || "Killua Zoldyck",
        author: process.env.EXIF_AUTHOR || "https://api.andaraz.com"
    },
    owner: (process.env.OWNER || "62812XXX").split(",").map(x => x.trim()),
    timezone: process.env.TIMEZONE || "Asia/Jakarta",
    footer: process.env.FOOTER || "Powered by https://api.andaraz.com"
}

global.saveConfig = () => {
    const envContent = `
# Pilihan login: true = Pairing Code, false = QR Code
PAIRING_CODE=${process.env.PAIRING_CODE || 'false'}

# Nomor HP untuk Pairing Code (wajib jika PAIRING_CODE=true, contoh: 628xxxxxxxx)
PHONE_NUMBER=${process.env.PHONE_NUMBER || ''}

# APIs
API_ZENZ=${global.config.APIs.zenz}
API_KEY=${global.config.APIs.apikey}

# Options
AUTO_READ=${global.config.options.autoRead}
SELF_MODE=${global.config.options.self}
LIMIT_COUNT=${global.config.options.limitCount}
LIMIT_GAME=${global.config.options.limitGame}

# Exif Sticker
EXIF_PACKNAME=${global.config.exif.packname}
EXIF_AUTHOR=${global.config.exif.author}

# Owner (dipisahkan dengan koma jika lebih dari satu)
OWNER=${global.config.owner.join(',')}

# Timezone & Footer
TIMEZONE=${global.config.timezone}
FOOTER=${global.config.footer}
`.trim()
    fs.writeFileSync('./.env', envContent, 'utf-8')
}

require("./global")
const P = require ('pino')
const { Boom } = require ('@hapi/boom')
const { default: makeWASocket, delay, DisconnectReason, fetchLatestBaileysVersion, useMultiFileAuthState, useSingleFileAuthState,  jidNormalizedUser, Browsers } = require ('@whiskeysockets/baileys')
const cron = require('node-cron')
const qrcode = require('qrcode-terminal')
const { Collection, Simple } = require("./lib")

const Welcome = require("./lib/Welcome")
const config = global.config
const { serialize, WAConnection } = Simple
const Commands = new Collection()

global.prefa = /^[#$+.?_&<>!/\\]/
Commands.prefix = prefa



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
                delay(100)
            }
        })
        Commands.list = listCommand
    } catch (e) {
        console.error(e)
    }
}

const connect = async () => {
    await readCommands()
    let { state, saveCreds } = await useMultiFileAuthState(path.resolve('./session'))
    let { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    const usePairingCode = process.env.PAIRING_CODE === 'true'

    let connOptions = {
        version,
        logger: P({ level: 'silent' }),
        browser: Browsers.macOS('Desktop'),
        printQRInTerminal: !usePairingCode,
        markOnlineOnConnect: false,
        patchMessageBeforeSending: (message) => {

                const requiresPatch = !!(
                  message.buttonsMessage
              	|| message.templateMessage
              	|| message.listMessage
                );
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                },
                                ...message,
                            },
                        },
                    };
                }
                return message;
    },
        auth: state,
        syncFullHistory: true
    }

    const killua = new WAConnection(makeWASocket(connOptions))

    killua.ev.on("creds.update", saveCreds)

    if (usePairingCode && !state.creds.registered) {
        let phoneNumber = process.env.PHONE_NUMBER
        if (phoneNumber) {
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            setTimeout(async () => {
                try {
                    let code = await killua.requestPairingCode(phoneNumber)
                    console.log(`\n====================================\nPAIRING CODE : ${code}\n====================================\n`)
                } catch (e) {
                    console.error("Failed to request pairing code:", e)
                }
            }, 3000)
        } else {
            console.log("\n[WARNING] PHONE_NUMBER is required in .env for pairing code login!\n")
        }
    }

    killua.ev.on("connection.update", async(update) => {
        if (update.connection == "open" && killua.type == "legacy") {
            killua.user = {
                id: killua.state.legacy.user.id,
                jid: killua.state.legacy.user.id,
                name: killua.state.legacy.user.name
            }
        }
        const { lastDisconnect, connection, qr } = update
        if (qr && !usePairingCode) {
            qrcode.generate(qr, { small: true })
        }
        if (connection) {
            console.info(`Connection Status : ${connection}`)
        }

        if (connection == "close") {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); killua.logout().catch(() => {}); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); connect(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); connect(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); killua.logout().catch(() => {}); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); connect(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); connect(); }
            else killua.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
    })

    // Welcome
    killua.ev.on("group-participants.update", async (m) => {
		Welcome(killua, m)
	})

    killua.ev.on("messages.upsert", async (chatUpdate) => {
        m = serialize(killua, chatUpdate.messages[0])

        if (!m.message) return
        if (m.key && m.key.remoteJid == "status@broadcast") return
        if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return
        
        if (config.options.autoRead) await killua.readMessages([m.key])
        require("./killua")(killua, m, Commands, chatUpdate)
    })

    if (killua.user && killua.user?.id) killua.user.jid = jidNormalizedUser(killua.user?.id)

	return killua

}

cron.schedule('0 0 * * *', () => {
    var folder = './temp/'
    fs.readdir(folder, (err, files) => {
        if (err) throw err
        for (const file of files) {
            console.log(file + ' : File Deleted Successfully.')
            fs.unlink(folder + file, function (err) {
                if (err && err.code == 'ENOENT') {
                    console.info("File doesn't exist, won't remove it.");
                } else if (err) {
                    console.error("Error occurred while trying to remove file");
                } else {
                    console.info(`removed`);
                }
            });
        }
    })
    console.log('Success Deleted temp Folder')
}, {
    scheduled: true,
    timezone: config.timezone
})

connect()
