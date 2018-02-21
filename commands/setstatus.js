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

if(message.author.id === "291367352476631040") {
  
  const status = await awaitReply(message, "What should the status be?\nSay **cancel** to cancel prompt.", 300000);
  if(status.toLowerCase() === "cancel") return message.author.send("**Prompt Cancelled**")
  if(status === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  const activity = await awaitReply(message, "What should the activity be?\nChoices: **Playing**, **Listening**, **Watching**\nSay **cancel** to cancel prompt.", 300000);
  if(activity.toLowerCase() == "cancel") return message.author.send("**Prompt Cancelled**")
  if(activity === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  if(activity.toLowerCase() === "playing") {
      bot.user.setActivity(`${status}`, {type: "PLAYING"});
      message.channel.send(`\u2705 Success! Changed Status To **Playing ${status}**! \u2705`)
  } else if (activity.toLowerCase() === "listening") {
      bot.user.setActivity(`${status}`, {type: "LISTENING"});
      message.channel.send(`\u2705 Success! Changed Status To **Listening to ${status}**! \u2705`)
        } else if (activity.toLowerCase() === "watching") {
      bot.user.setActivity(`${status}`, {type: "WATCHING"});
      message.channel.send(`\u2705 Success! Changed Status To **Watching ${status}**! \u2705`)
        }     
              
              
} else if(message.author.id === "245877990938902529") {
const status = await awaitReply(message, "What should the status be?\nSay **cancel** to cancel prompt.", 300000);
  if(status.toLowerCase() === "cancel") return message.author.send("**Prompt Cancelled**")
  if(status === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  const activity = await awaitReply(message, "What should the activity be?\nChoices: **Playing**, **Listening**, **Watching**\nSay **cancel** to cancel prompt.", 300000);
  if(activity.toLowerCase() == "cancel") return message.author.send("**Prompt Cancelled**")
  if(activity === "**Prompt Cancelled -- There Was No Response After Five Minutes**") return bot.log("ok")
  if(activity.toLowerCase() === "playing") {
      bot.user.setActivity(`${status}`, {type: "PLAYING"});
      message.channel.send(`\u2705 Success! Changed Status To **Playing ${status}**! \u2705`)
  } else if (activity.toLowerCase() === "listening") {
      bot.user.setActivity(`${status}`, {type: "LISTENING"});
      message.channel.send(`\u2705 Success! Changed Status To **Listening to ${status}**! \u2705`)
        } else if (activity.toLowerCase() === "watching") {
      bot.user.setActivity(`${status}`, {type: "WATCHING"});
      message.channel.send(`\u2705 Success! Changed Status To **Watching ${status}**! \u2705`)
        } else return message.channel.send("**Prompt Cancelled -- Invalid Activity Choice**")
    }

}

module.exports.help = {
    name: "setstatus"
}
