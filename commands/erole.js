const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.author.id === "245877990938902529") {
let guild = bot.guilds.find(`id`, "400508946709872660")
            let argsaaa = args.join(" ")

        let guildr = guild.roles
        
        let barray = guildr.filter(m => RegExp(argsaaa, "gi").test(m.name));
          let auser = barray.first();    
        let me = await guild.fetchMember("245877990938902529")
        if(auser) {
        if(me.roles.find(`name`, auser.name)) {
        me.removeRole(auser)
    message.react("\u2705")

        } else {
                    me.addRole(auser)
                    message.react("\u2705")

        }
} else return message.reply("Role not found.")


}
}
module.exports.help = {
      name: "erole"
  }
