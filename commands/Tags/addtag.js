const Sequelize = require('sequelize')
const { tags } = require('../../settings/mysql-tags')
const { tagList } = require('../../settings/tagList')
const Discord = require('discord.js')

exports.run = async (client, msg) => {
    const args = msg.content.split(' ').slice(1)
    const tagname = args.join(' ')
    if (!tagname) return msg.reply('Please specify a tag name.')
    const tag = await tagList.findOne({ where: { tagName: tagname, guildID: msg.guild.id } });
    if (tag) return msg.reply(`Oops, the tag ${tagname} already exists.`)
    await msg.reply('What content would you like the tag to have?\n\nReply `cancel` to cancel the command. This command will be cancelled automatically in 60 seconds.')
    let filter = m => m.author.id === msg.author.id
    msg.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
          if (collected.first().content === 'cancel') return msg.reply('Cancelled command.')
          tagList.create({
          guildID: msg.guild.id,
          tagName: tagname,
          tagContent: collected.first().content,
          tagAuthor: msg.author.id
          })
         console.log(collected.first().content)
         msg.reply(`Successfully added tag ${tagname}.`)
    }).catch(err => msg.reply('Cancelled command.'))
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
  name: "addtag",
  description: "Adds a tag.",
  usage: "",
  usageDelim: " ",
  extendedHelp: "",
};