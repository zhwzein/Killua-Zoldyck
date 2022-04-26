module.exports = {
    name: "changemymind",
    alias: ["cmm"],
    desc: "Change my mind Maker",
    type: "creator",
    example: "Example : %prefix%command text",
    exec: async(killua, m, { text }) => {
        killua.sendFile(m.from, global.api("zenz", "/creator/changemymind", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}