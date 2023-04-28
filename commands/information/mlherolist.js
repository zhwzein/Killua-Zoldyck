const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "mlherolist",
    alias: ["mlherolist"],
    use: "<query>",
    desc: "MLBB Hero Detail Information",
    type: "information",
    example: `%prefix%command <query>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/information/mlherolist", { query: text }, "apikey"))
        let caption = `ML Hero List :\n\n`
        for (let i of fetch.result) {
            caption += `⭔ Name : ${i.name}\n`
            caption += `⭔ Roles : ${i.roles}\n\n`
        }
        killua.sendFile(m.from, fetch.result[0].avatar, "", m, { caption })
    },
}