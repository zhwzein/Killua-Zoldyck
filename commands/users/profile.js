const ms =require("parse-ms")
module.exports = {
    name: "profile",
    alias: ["me"],
    desc: "profile Check Information",
    type: "users",
    example: "%prefix%command",
	noLimit: true,
    start: async(killua, m, {isPremium, isOwner}) => {
		let statuses
		try {
			statuses = await killua.fetchStatus(m.sender);
		} catch {
			statuses = "Nothing.."
		}
		let cekprem = require("parse-ms")((await premium.getPremiumExpired(m.sender, _premium)) - Date.now())
		const premi = isPremium ? `-${cekprem.days} Days` : 'No'
		const level = 10
		const xp = 50
		const req = 20 * Math.pow(level, 2) + 50 * level + 100
		const limitnya = isPremium || isOwner ? 'Unlimited' : user.getLimit(m.sender, _user)
		const balance = user.getBalance(m.sender, _user)
		try {
			var pp = await killua.profilePictureUrl(m.sender, "image");
		} catch {
			var pp = "https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png";
		}
		let caption = `┌──⭓ *About Me*\n`
		caption += `│\n`
		caption += `│⭔ Username : ${m.pushName}\n`
		caption += `│⭔ About : ${statuses.status || statuses}\n`;
		caption += `│⭔ Role : Warrior\n`
		caption += `│⭔ Premium : ${premi}\n`
		caption += `│\n`
		caption += `│⭔ Level : ${level}\n`
		caption += `│⭔ Xp : ${xp} / ${req}\n`
		caption += `│⭔ Limit : ${limitnya}\n`
		caption += `│⭔ Balance : ${balance}\n`
		caption += `│\n`
		caption += `└───────⭓\n`
		killua.sendFile(m.from, pp, "", m, { caption })
    }
}