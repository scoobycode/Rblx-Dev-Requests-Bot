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
	      if(cuser) return message.reply("You cannot use this command because you just used it! To avoid spam, you must wait five minutes from the last time you used this command! If you are already in the process of using this command, you must cancel this prompt!")
let aaarray = amessages.filter(m => RegExp(message.guild.id, "gi").test(m.content));
	      let aauser = aaarray.first();
	      if(aauser) return message.reply("You cannot use this command because this guild is blacklisted from using this command!")

tchannel.send(`${message.author.id}, ${message.author.username}#${message.author.discriminator}\n**MUST WAIT TO USE REPORT COMMAND (IP)**`)
let ttchannel = bot.channels.find(`id`, "420748985410650123")
let ttmessages = await ttchannel.fetchMessages({ limit: 100 })

let darray = ttmessages.filter(m => RegExp(message.author.id, "gi").test(m.content));
	      let duser = darray.first();
  message.react("\u2705")
  message.channel.send(`${message.author}, Prompt will continue in DMs! \uD83D\uDCEC`)
	try
	{
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
  const proof = await awaitReply(message, `Do you have any proof that **${rblxname}** scammed you? Send **only links** to prove you were scammed. If you have no proof, say **skip**.\nSay **cancel** to cancel prompt.`, 300000);
  if(proof === "cancel") {
	  duser.delete()
	  return message.author.send("**Prompt Cancelled**")
  }
  if(proof === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return duser.delete()
  const describe = await awaitReply(message, "Anything else you would like us to know? If not, just say **skip**.\nSay **cancel** to cancel prompt.", 300000);
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
	}
	catch {
		return message.reply("I could not DM you the prompt! Check your privacy settings and try again!")
}
let invite = await message.channel.createInvite({maxAge:0})
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("New Scam Report")
    .setColor("#FF0000")
    .addField("Guild Reported From", message.guild.name)
    .addField("Guild ID", message.guild.id)
    .addField("Reporter's User ID", message.author.id)
    .addField("Invite To Guild", invite) 
    .addField("Time Reported", message.createdAt)
    .addField("Reported User", rblxname)
    .addField("Reporter's Discord Username", message.author)
    .addField("Reporter's Roblox Username", urrblxname)
    .addField("Proof Of Scam", proof)
    .addField("Extra Information", describe);

    pchannel.send(reportEmbed);
	duser.delete()
tchannel.send(`${message.author.id}, ${message.author.username}#${message.author.discriminator}\n**MUST WAIT TO USE REPORT COMMAND**`)

    message.author.send("\u2705 **Successfully Submitted! -- Your Response Was Submitted And Will Be Reviewed By Our Admins And Moderators Shortly!** \u2705");
let mod = bot.channels.find(`id`, "418531258344275978")
let thing = new Discord.RichEmbed()
.setTitle("New Report")
.setColor("#FF0000")
.addField("Time Sent", message.createdAt)
.addField("Author", message.author)
.addField("Author ID", message.author.id);
	await mod.send(thing)
    return;
}

module.exports.help = {
    name: "report"
}
