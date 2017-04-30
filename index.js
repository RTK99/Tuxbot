const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
var prefix = "/"
var api_key;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setGame('with a Terminal');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on("message", msg=> {
  if (msg.content.startsWith("Tux")) {
    msg.channel.sendMessage("Did someone mention me?");
  }
});

client.on("message", msg=> {
   if (msg.content === '/fetchavatar') {
     msg.reply(msg.author.avatarURL);
 }
});

client.on("message", msg=> {
  if (msg.content.startsWith(prefix + 'distro')) {
    var nickname = msg.content.replace(prefix + "distro", "").trim()
    newNick = msg.author.username + " ["+nickname+"]";
    if(!nickname){
        console.log('No input specified')
         return msg.reply("Please specify a distro.");
    }
    else if(newNick.length > 32) {
        return msg.reply("Nickname too long");
    }
    else {
        msg.member.setNickname(newNick);
        msg.reply('Nickname Set')
 }
}});

client.on("message", msg => {
  if (msg.content.startsWith(prefix + 'rmdistro')) {
    msg.member.setNickname(msg.author.username);
    msg.reply("Distro removed.")
}});

client.on("message", msg => {
  if(msg.author.id !== "288855795951599617") return;
  if (msg.content.startsWith(prefix + 'eval')) {
      msg.reply(eval(msg.content.replace(prefix + "eval", "").trim()));
}});


fs.readFile('./discord_key.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  api_key = data;
  if (api_key) {
          client.login(api_key);
    } else {
          console.log("No API Key found");
    }
  console.log(data);
});
