async function awaitReply(message, question, limit = 300000) {
        const filter = m => m.author.id === message.author.id;
        await message.reply(question);
        try {
                const collected = await message.channel.awaitMessages(filter, {
                        max: 1
                        , time: limit
                        , errors: ['time']
                });
                return collected.first().content;
        } catch (error) {
                return message.reply("**Prompt cancelled, no response after five minutes.**");
        }
}

const Discord = require("discord.js");
module.exports.run = async (bot, message, args, prefix) => {
  let userid = message.author.id
  let userschannel = bot.channels.find(`id`, "433791777468841996")
  let pusers = await userschannel.fetchMessages({
          limit: 100
  })
  let usercheck = pusers.find(m => m.content === userid)
  if(!usercheck) return message.reply(`You must be a premium user to use this command! For more information, run \`${prefix}buypremium\`.`)
let guild = bot.guilds.find(g => g.id === "400508946709872660")
let tchannel = bot.channels.find(c => c.id === "434147498190307347")
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

let rblxname = await awaitReply(message, "What is your roblox username?\nSay **cancel** to cancel prompt.", 300000);
            var rblxn;
if (rblxname.content) {
  rblxn = rblxname.content
} else {
  rblxn = rblxname
}
            if (rblxn.endsWith("**Prompt cancelled, no response after five minutes.**")) {
              await check2.delete()
              return;
            }
            if (rblxn.toLowerCase() === "cancel") {
                    await check2.delete()
                    return await message.reply("**Prompt Cancelled**")
            }



            let type = await awaitReply(message, "What type of request is this? Ex: Build\nSay **cancel** to cancel prompt.", 300000);
                        var typo;
            if (type.content) {
              typo = type.content
            } else {
              typo = type
            }
                        if (typo.endsWith("**Prompt cancelled, no response after five minutes.**")) {
                                await check2.delete()
                                return;
                        }
                        if (typo.toLowerCase() === "cancel") {
                          await check2.delete()
                          return await message.reply("**Prompt Cancelled**")
                        }

                        let desc = await awaitReply(message, "Please give a detailed description of what you want.\nSay **cancel** to cancel prompt.", 300000);
                                    var deco;
                        if (desc.content) {
                          deco = desc.content
                        } else {
                          deco = desc
                        }
                                    if (deco.endsWith("**Prompt cancelled, no response after five minutes.**")) {
                                      await check2.delete()
                                      return;

                                    }
                                    if (deco.toLowerCase() === "cancel") {
                                      await check2.delete()
                                      return await message.reply("**Prompt Cancelled**")
                                    }


                                    let contact = await awaitReply(message, "How should people contact you?\nSay **cancel** to cancel prompt.", 300000);
                                                var cont;
                                    if (contact.content) {
                                      cont = contact.content
                                    } else {
                                      cont = contact
                                    }
                                                if (cont.endsWith("**Prompt cancelled, no response after five minutes.**")) {
                                                  await check2.delete()
                                                  return;

                                                }
                                                if (cont.toLowerCase() === "cancel") {
                                                  await check2.delete()
                                                  return await message.reply("**Prompt Cancelled**")
                                                }



                                                let confirm = await awaitReply(message, `**The following information will be sent:**\nRoblox Username: ${rblxname}\nType of Request: ${type}\nDescription of Request: ${desc}\nContact Information: ${contact}\n---------------------------------------\nSay **confirm** to send the request.\nSay **cancel** to cancel the prompt.`, 300000);
                                                            var con;
                                                if (confirm.content) {
                                                  con = confirm.content
                                                } else {
                                                  con = confirm
                                                }
                                                            if (con.endsWith("**Prompt cancelled, no response after five minutes.**")) {
                                                              await check2.delete()
                                                              return;

                                                            }
                                                            if (con.toLowerCase() === "cancel") {
                                                              await check2.delete()
                                                              return await message.reply("**Prompt Cancelled**")
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
                                                return message.reply("Sent your request!")



}


module.exports.help = {
    name: "request"
}
