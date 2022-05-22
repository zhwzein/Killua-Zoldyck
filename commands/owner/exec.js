let { exec: execS } = require("child_process")
const util = require("util")

module.exports = {
    name: "exec",
    alias: ["$","=<"],
    use: "<query>",
    desc: "Running Code terminal via Command",
    type: "owner",
    start: async(killua, m, { text }) => {
        if (!text) return m.reply(`No query code`)
        execS(text, async (err, stdout) => {
            if (err) return m.reply(err)
            if (stdout) return m.reply(stdout)
        })
    },
    isOwner: true,
    isQuery: true
}