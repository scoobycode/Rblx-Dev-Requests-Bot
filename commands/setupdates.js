module.exports.run = async (bot, message, args) => {
	let guild = bot.guilds.find(`id`, "443867131721941005");;
	let member = await guild.fetchMember(message.author.id)
	if (!member) return;
	if (member && member.roles.get("443867603103121410")) { //developer
  let update = message.content.substr(12);

let channel = bot.channels.find(`id`, "444588564328742926")
let editor = await channel.fetchMessage("444593973756166155")
await editor.edit(update)
await message.react("\u2705")


}


}
module.exports.help = {
	name: "setupdates"
}
