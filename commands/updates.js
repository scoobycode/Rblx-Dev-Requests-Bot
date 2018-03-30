module.exports.run = async (bot, message, args) => {

let channel = bot.channels.find(`id`, "429099957232992256")
let editor = await channel.fetchMessage("429100390206668800")
message.channel.send(editor.content)


}



module.exports.help = {
	name: "updates"
}
