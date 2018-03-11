const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	let helper = new Discord.RichEmbed()
	.setTitle("Commands")
	.addField("Report", "Starts a prompt to report a scammer and send that prompt to the RDR server")
	.addField("Invite", "Sends you my invite")
	.addField("Server", "Sends you the invite to the RDR server")
	.addField("Scamcheck", "Tells you whether the username you provided is in our scam database or not");


	message.react("\u2705")
	message.author.send(helper)
}
module.exports.help = {
	name: "help"
}
