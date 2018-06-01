const botconfig = require("./botconfig.js");
const Discord = require("discord.js");
const fs = require("fs");
const DBL = require('dblapi.js');
const bot = new Discord.Client({ disableEveryone: true });
bot.counter = false;
//let blacklist = require("./blacklist.json")
process.on('unhandledRejection', console.error)
const request = require('request-promise-native');

bot.loaders = { enabledLoaders: [], disabledLoaders: [] };

fs.readdirSync(__dirname + "/load").forEach(file => {
	try {
		const LOADER = require("./load/" + file);
		bot.loaders.enabledLoaders.push(LOADER);
	} catch(err) {
		bot.loaders.disabledLoaders.push(file);
		console.log(`\nThe ${file} load module failed to load:`);
		console.log(err);
	}
});

bot.commands = new Discord.Collection();
bot.disabledCommands = [];
var jsfiles;

function checkCommand(command, name) {
	var resultOfCheck = [true, null];
	if (!command.run) resultOfCheck[0] = false; resultOfCheck[1] = `Missing Function: "module.run" of ${name}.`;
	if (!command.help) resultOfCheck[0] = false; resultOfCheck[1] = `Missing Object: "module.help" of ${name}.`;
	if (command.help && !command.help.name) resultOfCheck[0] = false; resultOfCheck[1] = `Missing String: "module.help.name" of ${name}.`;
	return resultOfCheck;
}

fs.readdir("./commands/", (err, files) => {
	if (err) console.log(err);
	jsfiles = files.filter(f => f.endsWith(".js"));
	if (jsfiles.length <= 0) return console.log("Couldn't find commands.");
	jsfiles.forEach((f) => {
		try {
			var props = require(`./commands/${f}`);
			if (checkCommand(props, f)[0]) {
				bot.commands.set(props.help.name, props);
			} else {
				throw checkCommand(props, f)[1];
			}
		} catch(err) {
			bot.disabledCommands.push(f);
			console.log(`\nThe ${f} command failed to load:`);
			console.log(err);
		}
	});
});
function postServerCount() {
    return request.post({
        uri: `https://discordbots.org/api/bots/${bot.user.id}/stats`,
        headers: {
            Authorization: process.env.dbl,
        },
        json: true,
        body: {
            server_count: bot.guilds.size,
        },
    });
}
bot.on("ready", async () => {
	bot.loaders.enabledLoaders.forEach((loader) => {
		if (loader.run != null && loader.id != null) loader.run(bot).catch((err) => {
			console.log("\nError in loader " + loader.id + ":\n" + err);
		});
	});
	postServerCount()
	console.log(`${bot.user.username} is online!`);
	let tchannel = bot.channels.find(`id`, `444588562550358016`);
	let ochannel = bot.channels.find(`id`, `444588562961268768`);
	await tchannel.bulkDelete(100)
	let upvotesholdingchannel = bot.channels.find("id", "448615839533498388");
	let upvotessend = bot.channels.find("id", "448951130081460245");
	var upvoter;
	upvotesholdingchannel.fetchMessages({ limit: 100 }).then((msgs) => {
		msgs.forEach(async (msg) => {
			upvoter = await bot.fetchUser(msg.content)
			upvotessend.send(`Many thanks to ${upvoter.tag} for upvoting our bot!`).then(() => {
				msg.delete();
			})
		})
	})
	bot.fetchUser("291367352476631040").then(user => {
		if (!user.presence.game) return bot.user.setActivity("for !help", { type: "WATCHING" });
		if (!user.presence.game.streaming) return bot.user.setActivity("for !help", { type: "WATCHING" });
		bot.user.setActivity(user.presence.game.name, {
			type: "STREAMING",
			url: user.presence.game.url
		});
	});
	await ochannel.bulkDelete(100)
	//await achannel.bulkDelete(100)
	await bot.user.setActivity("for !help", { type: "WATCHING" });
});

bot.on("presenceUpdate", function(oldMember, newMember) {
	if (oldMember.user.id === "291367352476631040") {
		if (newMember.presence.game !== null) {
			if (newMember.presence.game.streaming) {
				bot.user.setActivity(newMember.presence.game.name, {
					type: "STREAMING",
					url: newMember.presence.game.url
				});
			} else bot.user.setActivity("for !help", { type: "WATCHING" });
		} else bot.user.setActivity("for !help", { type: "WATCHING" });
	}
});
bot.on("guildCreate", async guild => {
	let hello = new Discord.RichEmbed()
		.setTitle("Thanks For Adding Me To Your Server!")
		.setColor("#0000ff")
		.setDescription("Thanks for inviting Scam reports bot to your server!\nScam reports bot is owned by Scooby and ethan and was made by the Co-Owner, @ethanlaj#8805. For a list of commands, just say \`!help\`\nIf you need any help what so ever, feel free to join our support server!\nInvite link: https://discord.gg/53Jgcu5");
	let hichannels = guild.channels.filter(c => c.type === "text")
	let ahichannels = hichannels.filter(c => c.permissionsFor(bot.user).has("READ_MESSAGES"));
	let fhichannel = ahichannels.filter(c => c.permissionsFor(bot.user).has("SEND_MESSAGES"));
	let hichannel = fhichannel.first();
	if (hichannel) {
		await hichannel.send(hello);
	}
	postServerCount()
	if (bot.counter) await bot.user.setActivity(`${bot.guilds.size} servers`, { type: "WATCHING" });
});

bot.on("guildDelete", async guild => {
	postServerCount()
	if (bot.counter) await bot.user.setActivity(`${bot.guilds.size} servers`, { type: "WATCHING" });
});

bot.on("message", async message => {
	let upvotesholdingchannel = bot.channels.find("id", "448615839533498388");
	let upvotessend = bot.channels.find("id", "448951130081460245");
	var upvoter;
	if (message.channel === upvotesholdingchannel) { 
		upvoter = await bot.fetchUser(message.content)
		upvotessend.send(`Many thanks to ${upvoter.tag} for upvoting our bot!`).then(() => {
			message.delete();
			})
}
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0].toLowerCase();
	let args = messageArray.slice(1);
	let guildid = message.guild.id;
	var val = false;
	let dbguild = bot.guilds.get("443929284411654144");
	let channels = dbguild.channels.filter(m => RegExp("prefix-database", "gi").test(m.name));
	async function getPrefix(bot, message, args) {
		const nestedMessages = await Promise.all(channels.map(ch => ch.fetchMessages({ limit: 100 })));
		const flatMessages = nestedMessages.reduce((a, b) => a.concat(b))
		const msg = flatMessages.find(msg => msg.content.startsWith(message.guild.id));
		return msg && msg.content.substr(1 + message.guild.id.length);
	}
	const aprefix = await getPrefix(bot, message, args)
	if (aprefix) var prefix = aprefix;
	//console.log(`${prefix} second`)
	if (!aprefix) var prefix = botconfig.prefix;
	// console.log(`${prefix} third`)
	if ((message.isMemberMentioned(bot.user)) && (message.content.endsWith("prefix"))) {
		return message.reply(`My prefix is \`${prefix}\``);
	}
	if ((message.author === bot.user) && (message.channel.id === "434152264135868418") && (message.content.endsWith("request timeout"))) {
		message.delete(180000);
	}
	if ((message.isMemberMentioned(bot.user)) &&
		(message.content.endsWith("prefix reset")) && (message.member.hasPermission("MANAGE_GUILD"))) {
		let aaa = dbguild.channels.filter(m => RegExp("prefix-database", "gi").test(m.name));
		aaa.forEach(chl => {
			chl.fetchMessages({ limit: 100 }).then(msgs => {
				msgs.forEach(msg => {
					if (msg.content.startsWith(`${message.guild.id}`)) {
						msg.delete();
					}
				});
			});
		});
		message.react("\u2705");
	}
	if (!message.content.startsWith(prefix)) return;
	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if (!commandfile) return;
	return commandfile.run(bot, message, args, prefix);
});



bot.login(botconfig.token);
