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
  message.react("\u2705")
  message.channel.send(`${message.author}, Prompt will continue in DMs! \uD83D\uDCEC`)
  const rblxname = await awaitReply(message, "What is the scammer's roblox username?\nSay **cancel** to cancel prompt.", 300000);
  if(rblxname.toLowerCase() === "cancel") return message.author.send("**Prompt Cancelled**")
  if(rblxname === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  const urrblxname = await awaitReply(message, "What is your roblox username?\nSay **cancel** to cancel prompt.", 300000);
  if(urrblxname === "cancel") return message.author.send("**Prompt Cancelled**")
  if(urrblxname === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  const proof = await awaitReply(message, `Do you have any proof that **${rblxname}** scammed you? Send **only links** to prove you were scammed. If you have no proof, say **skip**.\nSay **cancel** to cancel prompt.`, 300000);
  if(proof === "cancel") return message.author.send("**Prompt Cancelled**")
  if(proof === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  const describe = await awaitReply(message, "Anything else you would like us to know? If not, just say **skip**.\nSay **cancel** to cancel prompt.", 300000);
  if(describe === "cancel") return message.author.send("**Prompt Cancelled**")
  if(describe === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  const confirm = await awaitReply(message, `**The following information will be sent:**\nScammer's Roblox Username: ${rblxname}\nYour Roblox Username: ${urrblxname}\nProof Of Scam: ${proof}\nOther Information: ${describe}\n---------------------------------------\nSay **confirm** to send the report.\nSay **cancel** to cancel the prompt.`, 300000);
  if(confirm === "cancel") return message.author.send("**Prompt Cancelled**")
  if(confirm === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")


    let reportEmbed = new Discord.RichEmbed()
    .setTitle("New Scam Report")
    .setColor("#FF0000")
    .addField("Time Reported", message.createdAt)
    .addField("Reported User", rblxname)
    .addField("Reporter's Discord Username", message.author)
    .addField("Reporter's Roblox Username", urrblxname)
    .addField("Proof Of Scam", proof)
    .addField("Extra Information", describe);

    let reportchannel = message.guild.channels.find(`name`, "scamming-reports");
    reportchannel.send(reportEmbed);
    message.author.send("\u2705 **Successfully Submitted! -- Your Response Was Submitted And Will Be Reviewed By Our Admins And Moderators Shortly!** \u2705");
    return;
}

module.exports.help = {
    name: "report"
}
