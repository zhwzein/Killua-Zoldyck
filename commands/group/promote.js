module.exports = {
	name: "promote",
	alias: ["pm"],
    use: "<tag>",
	desc: "Promote Member To Admin",
	type: "group",
	start: async(killua, m, { text, prefix, command }) => {
        if (!text) return m.reply(`Example: ${prefix + command} @tag`)
		let me = m.quoted ? [m.quoted.sender] : m.mentions
		for (let i of me) await killua.groupParticipantsUpdate(m.from, [i], "promote")
		await m.reply("Suksess")
	},
    isGroup: true,
    isAdmin: true,
	isBotAdmin: true,
}