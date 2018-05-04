module.exports.run = async (bot, message, args) => {

if(message.author.id !== "245877990938902529") return;
let casechannel = bot.channels.find(`id`, "431610293060239380")
		let casenu = await casechannel.fetchMessage("431610688364871681")
		await casenu.edit("1")
                    message.react("✅")
    }

module.exports.help = {
    name: "resetcase"
}
