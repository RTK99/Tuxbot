const dateFormat = require('dateformat');
const now = new Date();
dateFormat(now, 'isoUtcDateTime');
const Discord = require('discord.js');
const config = require('../../config.json')
const Sequelize = require('sequelize');
const { cases } = require('../../settings/mysql-case')
const { caseList } = require('../../settings/caseList.js')


exports.run = async (client, msg, [caseNumber]) => {
     caseList.find({where:{caseNum: caseNumber, guildID: msg.guild.id}}).then((res) => {
      if (res == null) return msg.reply("That case doesn't exist.")
      const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      //.setTitle(`Case #${res.caseNum}`)
      .setAuthor(`${client.users.get(res.modID).tag} (${res.modID})`, `${client.users.get(res.modID).displayAvatarURL({})}`)
      .setThumbnail(`${client.users.get(res.userID).displayAvatarURL({})}`)
      .setDescription(`**Case #${res.caseNum}**\n\n**Member:** ${client.users.get(res.userID).tag} (${res.userID})\n\n**Action:** ${res.action}\n\n**Reason:** ${res.reasonFor}\n\n**Created At:** ${dateFormat(res.createdAt)}`)
      msg.channel.send({embed})
   });
};
      

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 0,
};

exports.help = {
  name: "case",
  description: "Pull up a mod incident.",
  usage: "<caseNumber:int>",
  usageDelim: "",
  extendedHelp: "",
};
