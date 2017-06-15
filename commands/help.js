const Discord = require('discord.js');
exports.run = (client, msg, prefix) => {

console.log(__filename);


 if (!msg.member.hasPermission('BAN_MEMBERS')) {
   const embed4 = new Discord.RichEmbed()
      .setColor(0x8EE85F)
      .setTimestamp()
      .addField('Commands List', "These comamnds are availible to you here:")
      .addField("Core",  'distro, help, help,distro, help,Arch, userinfo')
      .addField("Fun", "8ball, quiz, catfacts, coinflip, insult")
      .addField("Mod utilites", "warnpoints")
      .setFooter(`Requested by ${msg.author.tag}`)
      msg.channel.send( {embed: embed4}).catch(console.error);
  }
  else {
    const embed4 = new Discord.RichEmbed()
      .setColor(0x8EE85F)
      .setTimestamp()
      .addField('Commands List', "These commands are availible to you here:")
      .addField("Core",  'distro, help, help,distro, help,Arch, userinfo')
      .addField("Fun", "8ball, quiz, catfacts, coinflip, insult, fortune")
      .addField("Mod utilites", "warnpoints, warn, kick, ban, eval")
      .setFooter(`Requested by ${msg.author.tag}`);
      msg.channel.send( {embed: embed4}).catch(console.error);
   }

};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "help",
  description: "Command Description",
  usage: "",
  usageDelim: "",
  extendedHelp: "",
};