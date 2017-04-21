const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs')
var api_key;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


fs.readFile('./discord_key.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  api_key = data;
  console.log(data);
});

if (api_key) {
  client.login(api_key);
}
{
  console.log("No API Key found");
}

