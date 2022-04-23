module.exports = {
    name: "nsfwimage",
    alias: ["nsfwimage"],
    desc: "Generate Random NSFW Image From Nekoslife",
    type: "nekoslife",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    exec: async(killua, m, { text, toUpper }) => {
        let fetch = await global.api("zenz", "/api/anime/nsfw/" + text, {}, "apikey")
        let buttons = [
            {buttonId: `nsfwimage ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: fetch },
            caption: `Random NSFW Image ${toUpper(text)}`,
            footer: `Powered By https://zenzapis.xyz`,
            buttons: buttons,
            headerType: 4
        }
        killua.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["erok","erokemo","femdom","futanari","trap","blowjob","hentai","hololewd","lewdk","yuri","lewdkemo","lewd","nsfw_avatar","eron","pussy_jpg","keta","eroyuri","cum_jpg","tits","classic","feet","gasm","erofeet","ero","solo"]
}