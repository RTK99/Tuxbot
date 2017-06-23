[![Build Status](https://travis-ci.org/RTK99/tuxbot.svg?branch=master)](https://travis-ci.org/RTK99/tuxbot)
[![Discord](https://discordapp.com/api/guilds/304606245132697600/embed.png)](http://discord.gg/Xcn9yVK)

# tuxbot
A Komada-based bot coded in node.js

Tuxbot, originally on the Linux Discord server, is now officially released!

**Features**

`kick`- kick a user from the guild

`ban`- bans a user from the guild.

`eval`- Evaluates arbitrary javascript code, reserved for the bot owner.

`say`- Talk as your bot!

`fortune`- Tells you a random fortune.

`warn`- warns a user, with a given amount of points.

`warnpoints`- Allows a user to check their warnpoints

`userinfo`- Shows some info about the user.

**Music**
`play`- play a song added to the queue.
`add`- add a song to the queue
`queue`- get the current queue.
`musichelp`- get more info on the music commands.

And many more to come!

**Installation**

**IMPORTANT: This bot will not work with node versions lower than 8.1.2. Please make sure your node version is up-to-date.**

1. Create a new bot application at http://discordapp.com/developers/applications/me, and get the token. If you don't know how to do this, follow this guide:https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
Name it whatever you want. If you want Tux's logo, look in the master directory for `Tux.png`.

2. Find the client ID on the page, and generate an invite link with this website: https://discordapi.com/permissions.html.
Make sure you select `Administrator`. Then, click the link at the bottom and add it to your server.

3. Clone the repo using by either downloading the zip or running `git clone https://github.com/RTK99/tuxbot.git`

4.Run `npm i` to install all of the required modules.

5. Create a config.json file in the master directory and have it look like this: 
```json
{
 "token": "your token here"
}
```
6. Optional: edit the prefix in `start`.

7. Start the bot with `npm start` or `pm2 start start.js` if you're using PM2.

8. Start using tuxbot!



