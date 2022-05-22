let { exec: execS } = require("child_process")

module.exports = {
    name: "update",
    alias: ["upgrade"],
    desc: "Updating a local repository with changes from a GitHub repository",
    type: "owner",
    start: async(killua, m) => {
        execS('git pull origin main', async (err, stdout) => {
            if (err) return m.reply(err)
            if (stdout) return m.reply(stdout)
        })
    },
    isOwner: true,
}