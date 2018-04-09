const Discord = require("discord.js");
//thanks gtc
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(//g, "" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

let rejectionembed = new Discord.RichEmbed()
  .setDescription("nah bro")

module.exports.run = async (bot, message, args) => {
  if(message.author.id != "245877990938902529") && (message.author.id != "291367352476631040") return message.channel.send(rejectionembed);
  try {
    const code = args.join(" ");
    let evaled = eval(code);
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"xl"});
  } catch (err) {
    message.channel.send(\ERROR` ```xl\n${clean(err)}\n````);
  }
}
module.exports.help = {
  name: "eval"
}
