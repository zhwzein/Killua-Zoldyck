module.exports = {
	ame: "demote",
	alias: ["dm"],
    use: "<tag>",
	desc: "Demote Admin To Member",
	type: "group",
	start: async(killua, m, { text, prefix, command }) => {
        if (!text) return m.reply(`Example: ${prefix + command} @tag`)
		let me = m.quoted ? [m.quoted.sender] : m.mentions
		for (let i of me) await killua.groupParticipantsUpdate(m.from, [i], "demote")
		await m.reply("Sukses")
	},
    isGroup: true,
    isAdmin: true,
	isBotAdmin: true,
}