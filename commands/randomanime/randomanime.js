module.exports = {
    name: "randomanime",
    alias: ["animerandom"],
    use: "<query>",
    desc: "Generate Random Anime Image From Apis",
    type: "randomanime",
    example: `\nList Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(killua, m, { text, toUpper }) => {
        let fetch = await global.api("zenz", "/randomanime/" + text, {}, "apikey")
        let buttons = [
            {buttonId: `randomanime ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch },
            caption: `Random Anime ${toUpper(text)}`,
            footer: config.footer,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["anime","waifu","husbu","neko","shinobu","megumin","uniform","maid","marin-kitagawa","mori-calliope","raiden-shogun","oppai","selfies","waifus","nekos","trap","blowjob","hentai","milf","oral","paizuri","ecchi","ero"]
}