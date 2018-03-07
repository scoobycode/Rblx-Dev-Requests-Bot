const botconfig = require("./botconfig.js");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f,i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("for !report", {type: "WATCHING"});
  let tchannel = bot.channels.find(`id`, "420748985410650123")
  tchannel.bulkDelete(100)
});

bot.on("message", async message => {
  //if(message.author.bot) return;
  if(message.channel.type === "dm") return;

if((message.content.endsWith("**MUST WAIT TO USE REPORT COMMAND**")) && (message.author.bot) && (message.channel.id === "420748985410650123")) {
  message.delete(600000)
}
  let hello = new Discord.RichEmbed()
    .setTitle("Thanks For Adding Me To Your Server!")
    .setColor("#0000ff")
    .description("Thanks for inviting Scam reports bot to your server!\nScam reports bot is owned by RDR and was made by the Co-Owner, @ethanlaj#8805. For a list of commands, just say \`!help\`\nIf you need any help what so ever, feel free to join our support server!\nInvite link: https://discord.gg/3dECRh8");


  client.on("guildCreate", guild => {
    
  let hichannel = await guild.channels.first()
    hichannel.send(hello)
});
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(!message.content.startsWith(botconfig.prefix)) return;
let commandfile = bot.commands.get(cmd.slice(prefix.length));
return commandfile.run(bot, message, args);


})




bot.login(botconfig.token);
