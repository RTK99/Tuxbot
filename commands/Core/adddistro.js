const Sequelize = require('sequelize');
const distros = new Sequelize({
  dialect: 'sqlite',

  storage: './sqlite/database.sqlite',

  logging: false
});

const distroList = distros.define('distroList', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    distro: {
        type: Sequelize.STRING
    }
});

distroList.sync();

exports.run = async (client, msg, [distroName]) => {
    msg.reply(`Distro **${distroName}** successfully added to the database.`).then(() => {
      distroList.create({distro:distroName})
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
  name: "adddistro",
  description: "adds a distro to the database.",
  usage: "<distroName:str>",
  usageDelim: " ",
  extendedHelp: "",
};
