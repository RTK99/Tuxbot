const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var prefix = '/';
var token;
var rTexel = '288855795951599617';
var webjocky = '176503593321496577';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setGame('with a Terminal').catch(console.error);
});

// Message Listener & Logic
client.on('message', msg => {
  // Check if conversational
  switch (msg.content) {
    // ping -> Pong!
    case 'ping':
        msg.reply('Pong!').catch(console.error);
        break;

        // Tux mentioned
    case 'Tux':
        msg.reply('Did someone mention me?').catch(console.error);
        break;
  }

  // Check if the message is a command
  if (msg.content.startsWith(prefix)) {

    // Check which command
    switch (msg.content) {

      // Get requestor's avatar URL
      case prefix + 'fetchavatar':
          msg.reply(msg.author.avatarURL).catch(console.error);
          break;

      // Show help text for /fetchavatar
      case prefix + 'fetchavatar --help':
          msg.reply('```Bash\nusage: /fetchavatar \nReturns the URL to your Discord-hosted avatar```').catch(console.error);
          break;

      // Show help text for /distro
      case prefix + 'distro --help':
          msg.reply('```Bash\nusage: /distro <distroname>\nProviding no argument will remove the distro```').catch(console.error);
          break;

      // Nickname update handler
      case prefix + 'distro':
      case (msg.content.match(/\/distro[a-zA-Z0-9 ]*/) || {}).input:
          var nickname = msg.content.replace(prefix + 'distro', '').trim();
          newNick = msg.author.username + ' [' + nickname + ']';

          // Remove distro
          if (nickname.length == 0) {
              msg.member.setNickname(msg.author.username).catch(console.error);
              msg.reply('Distro removed').catch(console.error);
              break;
          }
          // Check for length limit
          else if (newNick.length > 32) {
              msg.reply('Distro too long').catch(console.error);
              break;
          }
          // Set distro
          else {
              msg.member.setNickname(newNick).catch(console.error);
              msg.reply('Distro Set').catch(console.error);
              break;
          }
        break;

      //Eval command: extra caution
      case prefix + 'eval':
      case (msg.content.match(/\/eval[a-zA-Z0-9 ]*/) || {}).input:
          if (msg.author.id === rTexel || msg.author.id === webjocky) {
              var evaled = eval(msg.content.replace(prefix + 'eval', '').trim());
              if (typeof evaled !== "string"){
                evaled = require("util").inspect(evaled);
                msg.reply(evaled).catch(console.error);
                break;
              }
              break;
          } else {
            msg.reply("sorry I can't do that for you.");
            break;
          }
        break;

      // Say command
      case prefix + 'say':
      case (msg.content.match(/\/say[a-zA-Z0-9 ]*/) || {}).input:
        if (msg.author.id === rTexel || msg.author.id === webjocky) {
          msg.delete(0)
          if(msg.channel.startTyping) msg.channel.stopTyping();
          msg.channel.send(msg.content.split(" ").slice(1).join(" "));
          break;
        }
        break;
    }
  }
});


// Read Discord token from file
fs.readFile('./discord_key.txt', 'utf8', function(err, data) {
    var response = '';
    if (err) {
        return console.log(err);
    }
    token = data;
    if (token) {
        client.login(token).catch(console.error);
        response = 'Token Found';
    } else {
        response = 'No Token found';
    }
    console.log(response);
});