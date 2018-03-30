module.exports.run = async (bot, message, args) => {
if (member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
  let update = args.join(" ")
let channel = bot.channels.find(`id`, "429099957232992256")
let editor = await channel.fetchMessage("429100390206668800")
await editor.edit(update)

}



module.exports.help = {
	name: "updates"
}
