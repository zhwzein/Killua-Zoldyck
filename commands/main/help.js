module.exports = {
    name: "menu",
    alias: ["help","?"],
    desc: "List all command",
    type: "main",
    exec: async(killua, m, { commands, args, prefix, text, toUpper }) => {
        if (args[0]) {
            let prefix = '$'
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*Alias :* ${cmd.alias.join(", ")}`)
            if (cmd.desc) data.push(`*Description :* ${cmd.desc}`)
            if (cmd.example) data.push(`*Example :* ${cmd.example.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)

            return m.reply(`*Info Command ${cmd.name.replace(/^\w/, c => c.toUpperCase())}*\n\n${data.join("\n")}`)
        } else {
            let teks = ""

            for (let type of commands.type) {
                teks += `┌──⭓ *${toUpper(type)} Menu*\n`
                teks += `│\n`
                teks += `${commands.list[type].filter(v => v.type !== "hide").map((cmd) => `│⭔ ${prefix + cmd.name}`).join("\n")}\n`
                teks += `│\n`
                teks += `└───────⭓\n\n`
            }
            let buttons = [
                { buttonId: `coffe`, buttonText: { displayText: 'Next Image' }, type: 1 }
            ]
            let buttonMessage = {
                image: { url: 'https://zenzapi.xyz/images/icon.jpg' },
                caption: teks,
                footer: `Powered By ${global.api("zenz")}`,
                buttons: buttons,
                headerType: 4
            }
            killua.sendMessage(m.from, buttonMessage, { quoted: m })
        }
    }
}
