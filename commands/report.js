async function awaitReply(message,question, limit = 300000){
    const filter = m => m.author.id === message.author.id;
    await message.author.send(question);

    try {
      const collected = await message.author.dmChannel.awaitMessages(filter, { max: 1, time: limit, errors: ['time'] });
      return collected.first().content;
    } catch (error) {
return message.author.send("**Prompt Cancelled -- There Was No Response After Five Minutes**");
    }
  }


const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(message.author.id !== "245877990938902529") return message.channel.send("soon:tm:")
    let channel = bot.channels.find(`id`, "420677482287464448")
    let pchannel = bot.channels.find(`id`, "411246419979141121")
    let tchannel = bot.channels.find(`id`, "420748985410650123")
    let achannel = bot.channels.find(`id`, "425802196790280203")
    let messages = await channel.fetchMessages({ limit: 100 })
    let tmessages = await tchannel.fetchMessages({ limit: 100 })
    let amessages = await achannel.fetchMessages({ limit: 100 })

    if(pchannel.topic.toLowerCase() === "closed") return message.reply("Reports are currently disabled! Sorry for the inconvenience!")
    let barray = messages.filter(m => RegExp(message.author.id, "gi").test(m.content));
	      let auser = barray.first();
	      if(auser) return message.reply("You cannot use this command because you are blacklisted!")
	let carray = tmessages.filter(m => RegExp(message.author.id, "gi").test(m.content));
	      let cuser = carray.first();
	      if(cuser) return message.reply("You cannot use this command because are already using this command! Cancel the prompt to use this command again!")
let aaarray = amessages.filter(m => RegExp(message.guild.id, "gi").test(m.content));
	      let aauser = aaarray.first();
	      if(aauser) return message.reply("You cannot use this command because this guild is blacklisted from using this command!")
let aaachannel = bot.channels.find(`id`, "411246419979141121")
	let msgs = await aaachannel.fetchMessages( {limit: 100} )
	let bmsgs = msgs.filter(m => m.embeds[0] && m.embeds[0].fields && m.embeds[0].fields[4].value === message.author.id)
	let delmessage = bmsgs.first()
	if(delmessage) return message.reply("You cannot use this command because you already have a pending report. To prevent spam, you must wait until your report is accepted or denied. If you don't want to wait, you can cancel your report by using `!cancelreport`.")
tchannel.send(`${message.author.id}, ${message.author.username}#${message.author.discriminator}\n**MUST WAIT TO USE REPORT COMMAND (IP)**`)
let ttchannel = bot.channels.find(`id`, "420748985410650123")
let ttmessages = await ttchannel.fetchMessages({ limit: 100 })

let darray = ttmessages.filter(m => RegExp(message.author.id, "gi").test(m.content));
	      let duser = darray.first();
	try {
	await message.author.send("Hello! This is the report prompt! Please answer all questions to the best of your ability and remember, false reports will cause you to get blacklisted from the system!\n---------------------------------------------------")
	}
	catch (e) {
		await duser.delete()
		return message.reply("I could not DM you the prompt! Check your privacy settings and try again!")
	}
  message.react("\u2705")
  message.channel.send(`${message.author}, Prompt will continue in DMs! \uD83D\uDCEC`)
	
  const rblxname = await awaitReply(message, "What is the scammer's roblox username?\nSay **cancel** to cancel prompt.", 300000);
  if(rblxname.toLowerCase() === "cancel") {
	  await duser.delete()
	  return message.author.send("**Prompt Cancelled**")
  }
  if(rblxname === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return duser.delete()
  const urrblxname = await awaitReply(message, "What is your roblox username?\nSay **cancel** to cancel prompt.", 300000);
  if(urrblxname === "cancel") { 
	  	  duser.delete()
	  return message.author.send("**Prompt Cancelled**")
  }
  if(urrblxname === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return duser.delete()
  
	
	
	//const proof = await awaitReply(message, `Do you have any proof that **${rblxname}** scammed you? Send **only links** to prove you were scammed. If you have no proof, your report will be auto-declined.\nSay **cancel** to cancel prompt.`, 300000);
	message.author.send("Do you have any proof that they scammed you? Provide images here.\nSay **done** to go to the next question.\nSay **cancel** to cancel prompt.")
	const filter = m => m.author.id === message.author.id
	const collector = message.author.dmChannel.createMessageCollector(filter, { time: 300000 });
	var proof = await new Promise(function(resolve, reject) {
	collector.on('collect', m => {
		if(m.content.toLowerCase() === "done") {
			collector.stop()
		}
		if(m.content.toLowerCase() === "cancel") {
			duser.delete()
			return message.author.send("**Prompt Cancelled**") 
		}
		if(m.content.toLowerCase() === "**Prompt Cancelled -- There Was No Response After Five Minutes**") {
			duser.delete()
		}
		});
	collector.on('end', collected => {
		let aproof = collected
		let aaproof = collected.filter(m => m.attachments.first())
		let bproof = aaproof.array()
		let cproof = bproof.map(m => m.attachments.first().url).join("\n")
		let mproof = aproof.map(m => m.content).join("\n")
		resolve(`${cproof}\n${mproof}`)
		})
	
	});
	
	
	
	
	
  const describe = await awaitReply(message, "How were you scammed? Explain anything we need to know here.\nSay **cancel** to cancel prompt.", 300000);
  if(describe === "cancel") {
	  duser.delete()
	  return message.author.send("**Prompt Cancelled**")
	  
	  
	  
	  
  }
  if(describe === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return duser.delete()
  const confirm = await awaitReply(message, `**The following information will be sent:**\nScammer's Roblox Username: ${rblxname}\nYour Roblox Username: ${urrblxname}\nProof Of Scam: ${proof}\nOther Information: ${describe}\n---------------------------------------\nSay **confirm** to send the report.\nSay **cancel** to cancel the prompt.`, 300000);
  if(confirm === "cancel") {
	  duser.delete()
	  return message.author.send("**Prompt Cancelled**") 
  }
  if(confirm === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return duser.delete()
	
let invite = await message.channel.createInvite({maxAge:0})
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("New Scam Report")
    .setColor("#FF0000")
    .addField("Guild Reported From", message.guild.name)
    .addField("Guild ID", message.guild.id)
    .addField("Reporter", message.author)
    .addField("Reporter's Username", message.author.tag)    
    .addField("Reporter's User ID", message.author.id)
    .addField("Invite To Guild", invite) 
    .addField("Time Reported", message.createdAt)
    .addField("Reported User", rblxname)
    .addField("Reporter's Roblox Username", urrblxname)
    .addField("Proof Of Scam", proof)
    .addField("Extra Information", describe);

    pchannel.send(reportEmbed);
	duser.delete()

    message.author.send("\u2705 **Successfully Submitted! -- Your Response Was Submitted And Will Be Reviewed By Our Admins And Moderators Shortly!** \u2705");
let mod = bot.channels.find(`id`, "418531258344275978")
let areportEmbed = new Discord.RichEmbed()
    .setTitle("Copy Of Report - Logging Purposes")
    .setColor("#FF0000")
    .addField("Guild Reported From", message.guild.name)
    .addField("Guild ID", message.guild.id)
    .addField("Reporter", message.author)
    .addField("Reporter's Username", message.author.tag)    
    .addField("Reporter's User ID", message.author.id)
    .addField("Invite To Guild", invite) 
    .addField("Time Reported", message.createdAt)
    .addField("Reported User", rblxname)
    .addField("Reporter's Roblox Username", urrblxname)
    .addField("Proof Of Scam", proof)
    .addField("Extra Information", describe);

	await mod.send(areportEmbed)
    return;
}

module.exports.help = {
    name: "report"
}
