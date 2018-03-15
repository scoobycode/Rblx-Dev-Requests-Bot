const rbx = require('roblox-js');

module.exports.run = async (bot, message, args) => {
    let channel = bot.channels.find(`id`, "420745256439513089")
let messages = await channel.fetchMessages({ limit: 100 })
var errortf
let user = await rbx.getIdFromUsername(args[0]).catch((err) => {
	     errortf = true
   		return message.reply(`${err}. If error persists, contact support by doing !server.`);
		      });
	 if (errortf == true) return;

    let array = messages.filter(m => RegExp(user, "gi").test(m.content));
	      let auser = array.first();
	
	     if(auser) return message.reply(`This person is in our scammers database!\n**Link to their profile:** https://www.roblox.com/users/${user}/profile`)
	if(!auser) return message.reply("This person is not in our scammers database!")

}

module.exports.help = {
    name: "scamcheck"
}
