var http = require('http')

module.exports = {
    name: "myip",
    alias: ["getip"],
    desc: "Get My IP Public Information",
    type: "owner",
    example: "%prefix%command",
    start: async(killua, m) => {
        http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                m.reply("My public IP address is: " + ip);
            })
        })
    },
    isOwner: true
}