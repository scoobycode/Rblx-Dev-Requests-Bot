async function awaitReply(message,question, limit = 1000){
    const filter = m => m.author.id === message.author.id;
    await message.author.send(question);
    try {
      const collected = await message.author.dmChannel.awaitMessages(filter, { max: 1, time: limit, errors: ['time'] });
      return collected.first().content;
    } catch (error) {
return message.author.send("**Prompt cancelled because there was no response after one minute.**");
    }
  }


const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.react("\u2705")
  message.channel.send(`${message.author}, Prompt will continue in DMs! \uD83D\uDCEC`)
  const rblxname = await awaitReply(message, "What is the scammer's roblox username?\nSay **cancel** to cancel prompt.", 1000);
  if(rblxname == "cancel") return message.author.send("**Prompt cancelled.**")
  if(rblxname == "Prompt cancelled because there was no response after one minute.") return false
  const urrblxname = await awaitReply(message, "What is your roblox username?\nSay **cancel** to cancel prompt.", 1000);
  if(urrblxname == "cancel") return message.author.send("**Prompt cancelled.**")
  if(urrblxname == "Prompt cancelled because there was no response after one minute.") return false
  const proof = await awaitReply(message, `Do you have any proof that **${rblxname}** scammed you? Send **only links** to prove you were scammed. If you have no proof, say **skip**.\nSay **cancel** to cancel prompt.`, 60000);
  if(proof == "cancel") return message.author.send("**Prompt cancelled.**")
  if(proof == "Prompt cancelled because there was no response after one minute.") return false
  const describe = await awaitReply(message, "Anything else you would like us to know? If not, just say **skip**.\nSay **cancel** to cancel prompt.", 1000);
  if(describe == "cancel") return message.author.send("**Prompt cancelled.**")
  if(describe == "Prompt cancelled because there was no response after one minute.") return false
  const confirm = await awaitReply(message, `**The following information will be sent:**\nScammer's Roblox Username: ${rblxname}\nYour Roblox Username: ${urrblxname}\nProof Of Scam: ${proof}\nOther Information: ${describe}\n------------------------------\nSay **confirm** to send the report.\nSay **cancel** to cancel the prompt.`, 1000);
  if(confirm == "cancel") return message.author.send("**Prompt cancelled.**")
  if(confirm == "Prompt cancelled because there was no response after one minute.") return false


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
    message.author.send("**Report Sent Successfully!** \u2705");
    return;
}

module.exports.help = {
    name: "report"
}
