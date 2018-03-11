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
let messages = await channel.fetchMessages()

    let array = messages.filter(m => RegExp(args[0], "gi").test(m.content));
	      let auser = barray.first();
	      if(auser) return message.reply("You cannot use this command because you are blacklisted!")
	let carray = tmessages.filter(m => RegExp(message.author.id, "gi").test(m.content));
	      let cuser = carray.first();
	      if(cuser) return message.reply("You cannot use this command because you just used it! To avoid spam, you must wait ten minutes from the last time you used this command!")

tchannel.send(`${message.author.id}, ${message.author.username}#${message.author.discriminator}\n**MUST WAIT TO USE REPORT COMMAND (IP)**`)
let ttchannel = bot.channels.find(`id`, "420748985410650123")
let ttmessages = await ttchannel.fetchMessag
}

module.exports.help = {
    name: "scamcheck"
}
