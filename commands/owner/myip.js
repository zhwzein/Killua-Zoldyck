const http = require('http')
const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "myip",
    alias: ["getip", "setip"],
    desc: "Get My IP Public Information & Set My Ip",
    type: "owner",
    example: "%prefix%command",
    start: async(killua, m, { text }) => {
        if (text) {
            let fetch = await fetchUrl(global.api("zenz", "/user/customip", { query: text }, "apikey"))
            m.reply("This will change your default IP on the web\n\n" + fetch.result)
        } else {
            http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
                resp.on('data', function(ip) {
                    m.reply("My public IP address is: " + ip);
                })
            })
        }
    },
    isOwner: true
}