const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "otakudesu-download",
    alias: ["odesu-download","otakudesu-download"],
    use: "<url>",
    desc: "Download Anime From Otakudesu",
    type: "animeweb",
    example: `\nOtakudesu download : %prefix%command <url> For download`,
    start: async(killua, m, { text }) => {
           let fetch = await fetchUrl(global.api("zenz", "/animeweb/otakudesu/download", { url: isUrl(text)[0] }, "apikey"))
            let urls = fetch.result.mp4.filter(a => a.host === "Mega")
            let array = []
            for (let a of urls) {
                if (!a) return m.reply("Episode Not Found!")
                array.push([`${a.resolusi}`, [[`${a.size}`, `.mega ${a.link}`]]])
            }

            killua.sendList(m.from, "OtakuDesu Download", "Please select the available resolution :D", config.footer, "Choose", array, m)
    },
    isQuery: true
}