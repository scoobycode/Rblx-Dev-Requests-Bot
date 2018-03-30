module.exports.run = async (bot, message, args) => {
	let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
  let update = message.content.substr(12);

let channel = bot.channels.find(`id`, "429099957232992256")
let editor = await channel.fetchMessage("429100390206668800")
await editor.edit(update)
message.react("\u2705")


}


}
module.exports.help = {
	name: "setupdates"
}
