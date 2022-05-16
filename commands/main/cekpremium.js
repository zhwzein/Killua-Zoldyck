module.exports = {
    name: "cekpremium",
    alias: ["cekprem"],
    desc: "Premium Check Information",
    type: "main",
    example: "%prefix%command",
    isPremium: true,
    start: async(killua, m) => {
        let cekprem = require("parse-ms")((await user.getPremiumExpired(m.sender, _user)) - Date.now())
        let caption = `*Expired :* ${cekprem.days} day ${cekprem.hours} hour ${cekprem.minutes} minute ${cekprem.seconds} Second`
        killua.sendText(m.from, caption, m)
    }
}