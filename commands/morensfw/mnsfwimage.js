module.exports = {
    name: "mnsfwimage",
    alias: ["morensfwimage","mnsfw"],
    use: "<query>",
    desc: "Generate More Random NSFW Image",
    type: "morensfw",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await global.api("zenz", "/api/morensfw/" + text, {}, "apikey")
        let buttons = [
            {buttonId: `mnsfwimage ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch },
            caption: `Random NSFW Image ${toUpper(text)}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["ahegao","ass","bdsm","blowjob","cuckold","cum","ero","femdom","foot","gangbang","glasses","hentai","hentaigif","jahy","maid",
    "manga","masturbation","mobilewall","netorare","nsfwneko","sfwneko","orgy","panties","pussy","tentacles","thighs","yuri","zettairyouiki"]
}