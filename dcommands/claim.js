const Discord = require("discord.js");
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dbl);
module.exports.run = async (bot, message, args) => {

  if(dbl.hasVoted(message.author.id)) {
    message.reply("Your rewards have been claimed!")
  } else {
    message.reply("You have not upvoted the bot! Upvote the bot here!\nhttps://discordbots.org/bot/403769002700046340?")
  }

}

module.exports.help = {
    name: "claim"
}
