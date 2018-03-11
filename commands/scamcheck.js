module.exports.run = async (bot, message, args) => {
    let channel = bot.channels.find(`id`, "420745256439513089")
let messages = await channel.fetchMessages()

    let array = messages.filter(m => RegExp(args[0], "gi").test(m.content));
	      let auser = barray.first();
	     if(auser) return message.reply("This person is in our scammers database!")
	if(!auser) return message.reply("This person is not in our scammers database!")

}

module.exports.help = {
    name: "scamcheck"
}
