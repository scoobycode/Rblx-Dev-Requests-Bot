async function awaitReply(message, question, limit = 300000) {
        //300000
        const filter = m => m.author.id === message.author.id;
        await message.author.send(question);
        try {
                const collected = await message.author.dmChannel.awaitMessages(filter, {
                        max: 1
                        , time: limit
                        , errors: ['time']
                });
                return collected.first()
                        .content;
        } catch (error) {
                return message.author.send("**Prompt cancelled, no response after five minutes.**");
        }
}
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
        //if ((message.author.id == "245877990938902529") || (message.author.id == "289380085025472523")) {
        let channel = bot.channels.find(`id`, "420677482287464448")
        let pchannel = bot.channels.find(`id`, "411246419979141121")
        let tchannel = bot.channels.find(`id`, "420748985410650123")
        let achannel = bot.channels.find(`id`, "425802196790280203")
        let messages = await channel.fetchMessages({
                limit: 100
        })
        let tmessages = await tchannel.fetchMessages({
                limit: 100
        })
        let amessages = await achannel.fetchMessages({
                limit: 100
        })
        if (pchannel.topic.toLowerCase() === "closed") return message.reply("Reports are currently disabled! Sorry for the inconvenience!")
        let barray = messages.filter(m => RegExp(message.author.id, "gi")
                .test(m.content));
        let auser = barray.first();
        if (auser) return message.reply("You cannot use this command because you are blacklisted!")
        let carray = tmessages.filter(m => RegExp(message.author.id, "gi")
                .test(m.content));
        let cuser = carray.first();
        if (cuser) return message.reply("You cannot use this command because are already using this command! Cancel the prompt to use this command again!")
        let aaarray = amessages.filter(m => RegExp(message.guild.id, "gi")
                .test(m.content));
        let aauser = aaarray.first();
        if (aauser) return message.reply("You cannot use this command because this guild is blacklisted from using this command!")
        let aaachannel = bot.channels.find(`id`, "411246419979141121")
        let msgs = await aaachannel.fetchMessages({
                limit: 100
        })
        let bmsgs = msgs.filter(m => m.embeds[0] && m.embeds[0].fields && m.embeds[0].fields[5].value === message.author.id)
        let delmessage = bmsgs.first()
        if (delmessage) return message.reply("You cannot use this command because you already have a pending report. To prevent spam, you must wait until your report is accepted or denied. If you don't want to wait, you can cancel your report by using `!cancelreport`.")
        tchannel.send(`${message.author.id}, ${message.author.username}#${message.author.discriminator}\n**MUST WAIT TO USE REPORT COMMAND (IP)**`)
        let ttchannel = bot.channels.find(`id`, "420748985410650123")
        let ttmessages = await ttchannel.fetchMessages({
                limit: 100
        })
        let darray = ttmessages.filter(m => RegExp(message.author.id, "gi")
                .test(m.content));
        let duser = darray.first();
        try {
                await message.author.send("Hello! This is the report prompt! Please answer all questions to the best of your ability and remember, false reports will cause you to get blacklisted from the system!\n---------------------------------------------------")
        } catch (e) {
                await duser.delete()
                return message.reply("I could not DM you the prompt! Check your privacy settings and try again!")
        }
        message.react("✅")
        message.channel.send(`${message.author}, Prompt will continue in DMs! 📬`)
        let rblxname = await awaitReply(message, "What is the scammer's roblox username?\nSay **cancel** to cancel prompt.", 300000);
        var rblxn;
        if (rblxname.content) {
                rblxn = rblxname.content
        } else {
                rblxn = rblxname
        }
        if (rblxn === "**Prompt cancelled, no response after five minutes.**") {
                return await duser.delete()
        }
        if (rblxn.toLowerCase() === "cancel") {
                await duser.delete()
                return await message.author.send("**Prompt Cancelled**")
        }
        let urrblxname = await awaitReply(message, "What is your roblox username?\nSay **cancel** to cancel prompt.", 300000);
        var urrblxn;
        if (urrblxname.content) {
                urrblxn = urrblxname.content
        } else {
                urrblxn = urrblxname
        }
        if (urrblxn.toLowerCase() === "cancel") {
                await duser.delete()
                return await message.author.send("**Prompt Cancelled**")
        }
        if (urrblxn === "**Prompt cancelled, no response after five minutes.**") {
                return await duser.delete()
        }
        //const proof = await awaitReply(message, `Do you have any proof that **${rblxname}** scammed you? Send **only links** to prove you were scammed. If you have no proof, your report will be auto-declined.\nSay **cancel** to cancel prompt.`, 300000);
        message.author.send("Do you have any proof that they scammed you? Provide only images and links here.\nSay **done** to go to the next question.\nSay **cancel** to cancel prompt.")
        const filter = m => m.author.id === message.author.id
        const collector = message.author.dmChannel.createMessageCollector(filter, {
                time: 300000
        });
        var proof = await new Promise(function (resolve, reject) {
                collector.on('collect', async function (m) {
                        if (m.content.toLowerCase() === "done") {
                                collector.stop()
                        }
                        if (m.content.toLowerCase() === "cancel") {
                                await duser.delete()
                                return await message.author.send("**Prompt Cancelled**")
                        }
                        if (m.content === "**Prompt cancelled, no response after five minutes.**") {
                                return await duser.delete()
                        }
                });
                collector.on('end', async function (collected) {
                        if (!collected.first()) {
                                await duser.delete()
                                return message.author.send("**Prompt cancelled, no response after five minutes.**")
                        }
                        if (collected.size === 1) {
                                return message.author.send("You must provide at least some kind of proof! Prompt cancelled.")
                        }
                        let aproof = collected.filter(m => m.content.startsWith("https://") || m.content.startsWith("http://"))
                        let abproof = aproof.array()
                        let aaproof = collected.filter(m => m.attachments.first())
                        let bproof = aaproof.array()
                        let cproof = bproof.map(m => m.attachments.first()
                                        .url)
                                .join("\n")
                        let mproof = abproof.map(m => m.content)
                                .join("\n")
                        resolve(`${cproof}\n${mproof}`)
                })
        });
        if (proof === "\n") {
                await duser.delete()
                return message.author.send("You did not provide valid proof! Proof must be in only links and images. Prompt cancelled.")
        }
        let describe = await awaitReply(message, "How were you scammed? Explain anything we need to know here.\nSay **cancel** to cancel prompt.", 300000);
        var des;
        if (describe.content) {
                des = describe.content
        } else {
                des = describe
        }
        if (des.toLowerCase() === "cancel") {
                await duser.delete()
                return await message.author.send("**Prompt Cancelled**")
        }
        if (des === "**Prompt cancelled, no response after five minutes.**") {
                return await duser.delete()
        }
        const confirm = await awaitReply(message, `**The following information will be sent:**\nScammer's Roblox Username: ${rblxname}\nYour Roblox Username: ${urrblxname}\nProof Of Scam: ${proof}\nOther Information: ${describe}\n---------------------------------------\nSay **confirm** to send the report.\nSay **cancel** to cancel the prompt.`, 300000);
        var con;
        if (confirm.content) {
                con = confirm.content
        } else {
                con = confirm
        }
        if (con.toLowerCase() === "cancel") {
                await duser.delete()
                return message.author.send("**Prompt Cancelled**")
        }
        if (con === "**Prompt cancelled, no response after five minutes.**") {
                return await duser.delete()
        }
        let invite = await message.channel.createInvite({
                maxAge: 0
        })
        let casechannel = bot.channels.find(`id`, "431610293060239380")
        let casenu = await casechannel.fetchMessage("431610688364871681")
        let casenumber = Number(`${casenu.content}`)
        await casenu.edit(`${casenumber + 1}`)
        let casenua = await casechannel.fetchMessage("431610688364871681")
        let reportEmbed = new Discord.RichEmbed()
                .setTitle("New Scam Report")
                .setColor("#FF0000")
                .addField("Case Number", casenua.content)
                .addField("Guild Reported From", message.guild.name)
                .addField("Guild ID", message.guild.id)
                .addField("Reporter", message.author)
                .addField("Reporter's Username", message.author.tag)
                .addField("Reporter's User ID", message.author.id)
                .addField("Invite To Guild", invite)
                .addField("Time Reported", message.createdAt)
                .addField("Reported User", rblxname)
                .addField("Reporter's Roblox Username", urrblxname)
                .addField("Proof Of Scam", proof)
                .addField("Description", describe);
        pchannel.send(reportEmbed);
        duser.delete()
        message.author.send("✅ **Successfully Submitted! -- Your Response Was Submitted And Will Be Reviewed By Our Admins And Moderators Shortly!** ✅");
        let mod = bot.channels.find(`id`, "418531258344275978")
        let areportEmbed = new Discord.RichEmbed()
                .setTitle("Copy Of Report - Logging Purposes")
                .setColor("#FF0000")
                .addField("Case Number", casenua.content)
                .addField("Guild Reported From", message.guild.name)
                .addField("Guild ID", message.guild.id)
                .addField("Reporter", message.author)
                .addField("Reporter's Username", message.author.tag)
                .addField("Reporter's User ID", message.author.id)
                .addField("Invite To Guild", invite)
                .addField("Time Reported", message.createdAt)
                .addField("Reported User", rblxname)
                .addField("Reporter's Roblox Username", urrblxname)
                .addField("Proof Of Scam", proof)
                .addField("Description", describe);
        await mod.send(areportEmbed)
        //     } else return message.channel.send("soon:tm:")
}
module.exports.help = {
        name: "report"
}
