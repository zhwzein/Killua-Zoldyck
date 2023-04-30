var zipper = require("zip-local");

module.exports = {
    name: "backup",
    alias: ["backup"],
    desc: "Database Backup",
    type: "owner",
    example: "%prefix%command",
    start: async (killua, m) => {
        zipper.zip("./database/", function (error, zipped) {
            if (!error) {
                zipped.compress();
                var buff = zipped.memory();
                zipped.save("./database.zip", async function (error) {
                    if (!error) {
                        killua.sendFile(m.from, "./database.zip", "database.zip", m, { caption: "File Backup Successfully !" })
                    }
                });
            }
        })
    },
    isOwner: true
}