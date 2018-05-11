const Discord = require("discord.js");
var random = require('random-string');
module.exports.run = async (bot, message, args) => {
let userid = message.author.id
let userschannel = bot.channels.find(`id`, "444588564056113162")
let pusers = await userschannel.fetchMessages({
        limit: 100
})
let usercheck = pusers.find(m => m.content === userid)
if(usercheck) return message.reply("You already have premium!")
let code = args[0]
if(!code) return message.reply("Please include the code to redeem!")
let codeschannel = bot.channels.find(`id`, "444588560859791381")
                let codes = await codeschannel.fetchMessages({
                        limit: 100
                })
                if(!codes) return message.reply("Not a valid code!")
                let matchedcode = codes.find(m => m.content === code)
                if(!matchedcode) return message.reply("Not a valid code!")
                await matchedcode.delete()
                await userschannel.send(message.author.id)
                message.reply("You now have premium!")

}
module.exports.help = {
  	name: "redeem"
  }
