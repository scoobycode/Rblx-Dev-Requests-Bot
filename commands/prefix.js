const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You don't have permission to use this command!")
if(!args[0]) return message.reply("Please provide the new prefix!")
let prefix = args[0]
let dbguild = bot.guilds.find(`id`, "417149156193337344");
let channel = dbguild.channels.find(`name`, "prefix-database")
let messages = await channel.fetchMessages({ limit: 100 })
let channels = dbguild.channels.filter(m => RegExp("prefix-database", "gi").test(m.name));
channels.forEach(chl => {
  chl.fetchMessages({ limit: 100 }).then(msgs => {
      msgs.forEach(msg => {
        if(msg.content.startsWith(`${message.guild.id}`)) {
          msg.delete()
        }
      })
    })
  })
if(messages.size === 100) {
await channel.setName("o-prefix-database")
await dbguild.createChannel('prefix-database')
  let newc = dbguild.channels.find(`name`, "prefix-database")
  await newc.overwritePermissions(channel.guild.id, {
  READ_MESSAGES: false
})
          await newc.setParent("420669357048463402");
          await newc.send(`${message.guild.id} ${prefix}`);
  		      message.react("\u2705")


} else {
  channel.send(`${message.guild.id} ${prefix}`)
  		      message.react("\u2705")
}
 }

module.exports.help = {
    name: "prefix"
}
