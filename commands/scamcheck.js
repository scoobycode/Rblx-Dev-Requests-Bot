module.exports.run = async (bot, message, args) => {
    let channel = bot.channels.find(`id`, "420745256439513089")
let messages = await channel.fetchMessages()
let user = await rbx.getIdFromUsername(args[0]).catch((err) => {
	    errortf = true
   		 message.reply(`${err}. If error persists, contact ethanlaj#8805.`);
		      });
	 if (errortf == true) return;

    let array = messages.filter(m => RegExp(user, "gi").test(m.content));
	      let auser = barray.first();
	
	     if(auser) return message.reply("This person is in our scammers database!")
	if(!auser) return message.reply("This person is not in our scammers database!")

}

module.exports.help = {
    name: "scamcheck"
}
