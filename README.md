# tuxbot + Moonix
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


And many more!

**Installation**

1. Create a new bot application at http://discordapp.com/developers/applications/me, and get the token. If you don't know how to do this, follow this guide:https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
Name it whatever you want. If you want Tux's logo, look in the master directory for `Tux.png`.

2. Clone the repo using by either downloading the zip or running `git clone https://github.com/RTK99/tuxbot.git`

3. Run `npm i` to install all of the required modules.

4. Create a config.json file in the master directory and have it look like this: 
```json
{
 "token": "youre token here"
}
```
5. Optional: edit the prefix in `tuxbot.js`.

6. Start the bot with `npm start` or `pm2 start tuxbot.js` if you're using PM2.

7. Start using tuxbot!

