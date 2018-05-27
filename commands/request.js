async function awaitReply(message, question, limit = 300000) {
        const filter = m => m.author.id === message.author.id;
        var questionembed = new Discord.RichEmbed()
                .setColor("#0000FF")
                .setDescription(question)
                .setFooter("This prompt will automatically cancel if you do not reply in 5 minutes.")
        await message.author.send(questionembed);
        try {
                const collected = await message.author.dmChannel.awaitMessages(filter, {
                        max: 1
                        , time: limit
                        , errors: ['time']
                });
                if(collected.first().content.toLowerCase() === "cancel") {
                        return ("cancel");
                } else {
                return collected.first().content;
                }
        } catch (error) {
                return ("**Prompt cancelled, no response after five minutes.**")
        }
}

const Discord = require("discord.js");
module.exports.run = async (bot, message, args, prefix) => {
         var timelimitembed = new Discord.RichEmbed()
                .setColor("#0000FF")
                .setDescription("Prompt cancelled, no response after five minutes");
        var cancelembed = new Discord.RichEmbed()
                .setColor("#0000FF")
                .setDescription("Prompt Cancelled");
  let userid = message.author.id
  let userschannel = bot.channels.find(`id`, "444588564056113162")
  let pusers = await userschannel.fetchMessages({
          limit: 100
  })
  let usercheck = pusers.find(m => m.content === userid)
  if(!usercheck) return message.reply(`You must be a premium user to use this command! For more information, run \`${prefix}buypremium\`.`)
let guild = bot.guilds.find(g => g.id === "400508946709872660")
let tchannel = bot.channels.find(c => c.id === "444588562961268768")
let tmessages = await tchannel.fetchMessages({
        limit: 100
})


let check = tmessages.find(m => m.content === message.author.id)
if(check) return message.reply("You are already using this command somewhere else!")

await tchannel.send(message.author.id)
let ttmessages = await tchannel.fetchMessages({
        limit: 100
})
let check2 = ttmessages.find(m => m.content === message.author.id)
 try {
         var helloembed = new Discord.RichEmbed()
                        .setColor("#0000FF")
                        .setDescription("Hello! This is the request prompt! Abusing this will cause you to get your premium removed without a refund.")
                await message.author.send(helloembed)
        } catch (e) {
                await check2.delete()
                return message.reply("I could not DM you the prompt! Check your privacy settings and try again!")
        }
        message.react("✅")
        message.channel.send(`${message.author}, Prompt will continue in DMs! 📬`)
let rblxname = await awaitReply(message, "What is your roblox username?\nSay **cancel** to cancel prompt.", 300000);
            var rblxn;
if (rblxname.content) {
  rblxn = rblxname.content
} else {
  rblxn = rblxname
}
            if (rblxn === "**Prompt cancelled, no response after five minutes.**") {
              await check2.delete()
              return message.author.send(timelimitembed)
            }
            if (rblxn === "cancel") {
                    await check2.delete()
                    return await message.author.send(cancelembed)
            }



            let type = await awaitReply(message, "What type of request is this? Ex: Build\nSay **cancel** to cancel prompt.", 300000);
                        var typo;
            if (type.content) {
              typo = type.content
            } else {
              typo = type
            }
                        if (typo === "**Prompt cancelled, no response after five minutes.**") {
                                await check2.delete()
                                return message.author.send(timelimitembed)

                        }
                        if (typo === "cancel") {
                          await check2.delete()
                          return await message.author.send(cancelembed)
                        }

                        let desc = await awaitReply(message, "Please give a detailed description of what you want.\nSay **cancel** to cancel prompt.", 300000);
                                    var deco;
                        if (desc.content) {
                          deco = desc.content
                        } else {
                          deco = desc
                        }
                                    if (deco === "**Prompt cancelled, no response after five minutes.**") {
					    await check2.delete()
					    return message.author.send(timelimitembed)
                                    }
                                    if (deco === "cancel") {
                                      await check2.delete()
                                      return await message.author.send(cancelembed)
                                    }


                                    let contact = await awaitReply(message, "How should people contact you?\nSay **cancel** to cancel prompt.", 300000);
                                                var cont;
                                    if (contact.content) {
                                      cont = contact.content
                                    } else {
                                      cont = contact
                                    }
                                                if (cont === "**Prompt cancelled, no response after five minutes.**") {
                                                  await check2.delete()
              					return message.author.send(timelimitembed)

                                                }
                                                if (cont === "cancel") {
                                                  await check2.delete()
                                                  return await message.author.send(cancelembed)
                                                }



                                                let confirm = await awaitReply(message, `**The following information will be sent:**\nRoblox Username: ${rblxname}\nType of Request: ${type}\nDescription of Request: ${desc}\nContact Information: ${contact}\n---------------------------------------\nSay **confirm** to send the request.\nSay **cancel** to cancel the prompt.`, 300000);
                                                            var con;
                                                if (confirm.content) {
                                                  con = confirm.content
                                                } else {
                                                  con = confirm
                                                }
                                                            if (con === "**Prompt cancelled, no response after five minutes.**") {
                                                              await check2.delete()
              							return message.author.send(timelimitembed)

                                                            }
                                                            if (con === "cancel") {
                                                              await check2.delete()
                                                              return await message.author.send(cancelembed)
                                                            }


                                                let pchannel = guild.channels.find(c => c.id === "434126927406825474")
                                                let reportEmbed = new Discord.RichEmbed()
                                                        .setTitle("New Request")
                                                        .setColor("#FF0000")
                                                        .addField("Requester's Discord ID", message.author.id)
                                                        .addField("Requester's Username", rblxname)
                                                        .addField("Type Of Request", type)
                                                        .addField("Description", desc)
                                                        .addField("How To Contact", contact);
                                                await pchannel.send(reportEmbed);
                                               await check2.delete()
						var bye = new Discord.RichEmbed()
                        				.setColor("#0000FF")
                        				.setDescription("Your request was sent!")
               						 await message.author.send(bye)
}


module.exports.help = {
    name: "request"
}
