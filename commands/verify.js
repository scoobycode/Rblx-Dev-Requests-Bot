const Discord = require("discord.js");
const rbx = require('roblox-js');

async function awaitReply(message, question, limit = 60000){
	const filter = m => m.author.id === message.author.id;
	await message.reply(question);
	try {
		const collected = await message.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
		return collected.first().content;
	} catch (error) {
		return false;
	}
}

async function everything(bot, message) {
  const username = await awaitReply(message, "What is your Roblox username or ID?\n\nSay `cancel` to cancel this prompt.", 60000);
  if (username == "cancel") return message.channel.send("Cancelled prompt.");
  var errortf;
  var userid = await rbx.getIdFromUsername(username).catch((err) => {
    errortf = true;
    message.reply(`${err}. Please try again. If this error persists, contact the bot developer.`);
  });
  if (errortf == true) return;
  var randomwords = [" vase", " hello", " lamp", " bus", " button", " book", " battery", " blanket", " mouse", " can", " rug", " pants", " pillow", " duck", " roblox", " lego"];
  var stoploop = 5;
  randomstring = "music";
  while (stoploop !== 0) {
    var randomstring = randomstring+randomwords[Math.floor(Math.random() * randomwords.length)]
    stoploop = stoploop-1;
  }
  const awaitfinish = await awaitReply(message, `Please put the following text in your blurb or status: \`${randomstring}\`. Say \`done\` when finished.\n\nSay \`cancel\` to cancel this prompt.`, 120000)
  if (awaitfinish == "cancel") return message.channel.send("Cancelled prompt.");
  if (awaitfinish.toLowerCase() == "done") {
		//var playerinfo = await rbx.getPlayerInfo(userid);
		var blurb = await rbx.getBlurb(userid)
		var status = await rbx.getStatus(userid)
    if (blurb.includes(randomstring) || status.includes(randomstring)) {
      // db code here putting username and discord id in the db
      message.reply(`Successfully linked your Discord account to ${username}. This may take some time to update into the database`)
			var dbguild = bot.guilds.get("417149156193337344");
      var dbchannel = dbguild.channels.find("name", "roblox-database")
      var olo = await dbchannel.fetchMessages({ limit: 100 });
      var msgcount = olo.size;
			if (msgcount == "100") {
				await dbchannel.setName("archived-roblox-database");
				dbguild.createChannel('roblox-database', 'text', [{
					id: dbguild.id,
					deny: ['READ_MESSAGES'],
					allow: []
				}]).then(() => {
				  var channelloop = 0;
				  var messageloop = 0;
					var dbchannels = dbguild.channels.filter(m => RegExp("roblox-database", "gi").test(m.name));
					dbchannel = dbguild.channels.find("name", "roblox-database");
					dbchannels.forEach(dbchannel => {
						dbchannel.fetchMessages({ limit: 100 }).then(messages => {
							messages.forEach(msg => {
								if (msg.content.startsWith(`${message.author.id}`)) {
									msg.delete()
								}
								messageloop = messageloop + 1;
								if (messageloop == messages.size) {
				          messageloop = 0;
				          channelloop = channelloop+1;
				          if (channelloop == dbchannels.size) {
				            message.channel.send(`${message.author.id} ${userid}`)
				          }
				        }
							});
						});
					});
				});
			} else {
				var channelloop = 0;
				var messageloop = 0;
				var dbchannels = dbguild.channels.filter(m => RegExp("roblox-database", "gi").test(m.name));
				dbchannel = dbguild.channels.find("name", "roblox-database");
				dbchannels.forEach(dbchannel2 => {
					dbchannel2.fetchMessages({ limit: 100 }).then(messages => {
						messages.forEach(msg => {
							if (msg.content.startsWith(`${message.author.id}`)) {
								msg.delete()
								dbchannel.send(`${message.author.id} ${userid}`)
							} else {
								messageloop = messageloop+1;
							}
							if (messageloop == messages.size) {
								messageloop = 0;
								channelloop = channelloop+1;
								if (channelloop == dbchannels.size) {
									dbchannel.send(`${message.author.id} ${userid}`);
								}
							}
						});
					});
				});
			}
    } else {
      message.reply(`Could not find the following text: \`${randomstring}\` in your blurb or status, please retry the command.`)
    }
  } else {
    message.reply("Invalid option. Options are `done` or `cancel`. Command has been cancelled, please retry.")
  }
}

module.exports.run = async (bot, message, args) => {
  everything(bot, message);
}
module.exports.help = {
  name: "verify"
}
