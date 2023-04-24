const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "randomtiktok",
    alias: ["rndmtt","ttr","ttrd"],
    use: "<query>",
    desc: "Download Media From https://www.tiktok.com",
    type: "downloader",
    example: "%prefix%command <query>",
    isPremium: true,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/randomtiktok", { username: text }, "apikey"))
            let caption = `*Random Tiktok Video* \nFrom ${text}\n\n`
            let i = fetch.result
            caption += `⭔ Username : ${i.username}\n`
            caption += `⭔ Followers : ${i.followers}\n`
            caption += `⭔ Caption : ${i.media.caption}\n`

            let buttons = [
                {buttonId: `randomtiktok ${text}`, buttonText: {displayText: '► NEXT'}, type: 1},
            ]
            let buttonMessage = {
                video: { url: i.media.videourl },
                caption: caption,
                footer: config.footer,
                buttons: buttons,
                headerType: 4
            }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}
