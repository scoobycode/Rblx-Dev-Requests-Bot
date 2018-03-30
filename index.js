const botconfig = require("./botconfig.js");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.counter = false
//let blacklist = require("./blacklist.json")
process.on('unhandledRejection', console.error)

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
  let tchannel = bot.channels.find(`id`, "420748985410650123")
  await tchannel.bulkDelete(100)
  await bot.user.setActivity("for !help", {type: "WATCHING"});
  //await bot.user.setUsername("Scam Reports")

});
bot.on("guildCreate", async guild => {
    let hello = new Discord.RichEmbed()
    .setTitle("Thanks For Adding Me To Your Server!")
    .setColor("#0000ff")
    .setDescription("Thanks for inviting Scam reports bot to your server!\nScam reports bot is owned by RDR and was made by the Co-Owner, @ethanlaj#8805. For a list of commands, just say \`!help\`\nIf you need any help what so ever, feel free to join our support server!\nInvite link: https://discord.gg/3dECRh8");

 let hichannels = guild.channels.filter(c => c.type === "text")
   let ahichannels = hichannels.filter(c => c.permissionsFor(bot.user).has("READ_MESSAGES"));
  let fhichannel = ahichannels.filter(c => c.permissionsFor(bot.user).has("SEND_MESSAGES"));
  let hichannel = fhichannel.first()
  if(hichannel) {
    await hichannel.send(hello)
  }
    if(bot.counter) await bot.user.setActivity(`${bot.guilds.size} servers`, {type: "WATCHING"});
});

bot.on("guildDelete", async guild => {
    if(bot.counter) await bot.user.setActivity(`${bot.guilds.size} servers`, {type: "WATCHING"});
});
bot.on("message", async message => {
    if ((message.content.endsWith("**MUST WAIT TO USE REPORT COMMAND**")) && (message.author.bot) && (message.channel.id === "420748985410650123")) {
        message.delete(300000)

    }
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let guildid = message.guild.id
    var val = false
    let dbguild = bot.guilds.find(`id`, "417149156193337344");
    let channels = dbguild.channels.filter(m => RegExp("prefix-database", "gi").test(m.name));
   async function getPrefix(bot, message, args) {
  const nestedMessages = await Promise.all(channels.map(ch => ch.fetchMessages({ limit: 100 })))
  const flatMessages = nestedMessages.reduce((a, b) => a.concat(b))
  const msg = flatMessages.find(msg => msg.content.startsWith(message.guild.id))
  return msg && msg.content.substr(1 + message.guild.id.length)
}
  const aprefix = await getPrefix(bot, message, args)
  if(aprefix) var prefix = aprefix
 //console.log(`${prefix} second`)
  if(!aprefix) var prefix = botconfig.prefix
                 // console.log(`${prefix} third`)
  if((message.isMemberMentioned(bot.user)) && (message.content.endsWith("prefix"))) {
    return message.reply(`My prefix is \`${prefix}\``)
  }
    if (!message.content.startsWith(prefix)) return;
                    let commandfile = bot.commands.get(cmd.slice(prefix.length));
                    if (!commandfile) return;
                    return commandfile.run(bot, message, args, prefix);
});



bot.login(botconfig.token);
