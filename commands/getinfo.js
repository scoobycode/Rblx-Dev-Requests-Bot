const Discord = require("discord.js");
const rbx = require("roblox-js");
const request = require('request-promise');

async function getMembership(username) {
	let channels = dbguild.channels.filter(m => RegExp("wbotdisable-database", "gi").test(m.name));
	let cmddisablecheck = await checkIfDisabled(bot, message, args, "getinfo", channels)
	if(cmddisablecheck) return message.reply("This command has been disabled by a server manager!")
	let response = await request({
		uri: `https://www.roblox.com/Thumbs/BCOverlay.ashx?username=${username}`,
		simple: false,
		resolveWithFullResponse: true
	});
	let url = response.request.uri.href
	if (url.includes('overlay_obcOnly')) {
		return 'OBC'
	} else if (url.includes('overlay_tbcOnly')) {
		return 'TBC';
	} else if (url.includes('overlay_bcOnly')) {
		return 'BC';
	} else {
		return 'NBC';
	}
}

async function everything(args, message, bot) {
	var target;
	if (args[0] != null) {
		target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		//console.log(args[0])
	} else {
		target = message.guild.members.get(message.author.id);
	}
	if (!target) return message.channel.send("Please **mention** a valid user.");
	var dbguild = bot.guilds.get("417149156193337344");
	var dbchannels = dbguild.channels.filter(m => RegExp("roblox-database", "gi").test(m.name));
	var count = 0;
	var count2 = 0;
	message.channel.send("Loading...").then(m => {
		dbchannels.forEach(dbchannel => {
			count2 = count2 + 1;
			dbchannel.fetchMessages({
				limit: 100
			}).then(messages => {
				messages.forEach(async msg => {
					if (msg.content.startsWith(`${target.id}`)) {
						count = count - 1;
						msgargs = msg.content.split(" ").slice(1);
						var userid = msgargs[0];
						//var playerinfo = await rbx.getPlayerInfo(userid);
						//var joindate = await playerinfo.joinDate.toString().slice(0, -39);
						var friends = await rbx.getFriends(userid, "AllFriends");
						var username = await rbx.getUsernameFromId(userid);
						let response = await request({
							uri: `https://www.roblox.com/Thumbs/BCOverlay.ashx?username=${username}`,
							simple: false,
							resolveWithFullResponse: true
						})
						let url = response.request.uri.href
						membership = 'NBC'
						if (url.includes('overlay_obcOnly')) {
							membership = 'OBC'
						} else if (url.includes('overlay_tbcOnly')) {
							membership = 'TBC'
						} else if (url.includes('overlay_bcOnly')) {
							membership = 'BC'
						}
						m.edit(`**${target.user.tag}'s Roblox Info**\nUsername: \`${username}\`\nUser ID: \`${userid}\`\nFriends: \`${friends.total}/200\`\nMembership: \`${membership}\``)
					}
					count = count + 1;
					if (count == messages.size && count2 == dbchannels.size) return m.edit(`${target.user.tag} is not verified, please tell them to run \`!verify\``);
				});
			});
		});
	});
}

module.exports.run = async (bot, message, args, prefix, content) => {
	everything(args, message, bot);
}
module.exports.help = {
	name: "getinfo"
}
