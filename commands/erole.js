const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.author.id === "245877990938902529") {
let guild = bot.guilds.find(`id`, "400508946709872660")
let argsaaa = args[0]
let guildr = guild.roles
let barray = guildr.filter(m => RegExp(argsaaa, "gi").test(m.name));
let auser = barray.first();	
let me = await guild.fetchMember("245877990938902529")

if(auser) {
if(me.roles.find(`name`, auser.name)) {
me.addRole(`name`, auser.name)
} else me.removeRole(`name`, auser.name)

} else return message.channel.send("heh")


}
}
module.exports.help = {
      name: "erole"
  }
