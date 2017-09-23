const { Command } = require('discord.js-commando');
const {Database, Model} = require('mongorito');
const connection = new Database('localhost/tuxbot');
let roles = ['Ubuntu', 'Kali', 'Debian', 'Arch', 'OpenSUSE', 'RedHat', 'Fedora', 'Other', 'Manjaro', 'Antergos', 'Mint'];
connection.connect()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(`Hmm..there was an error connecting with MongoDB.. ${err.stack}`));
class Distro extends Model {
    collection() {
        return ('distroLists');
    }

}
connection.register(Distro);

module.exports = class DistroCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'distro',
            group: 'distro',
            memberName: 'distro',
            description: 'Adds a distro to your username.',
            example: ['distro ubuntu'],
            args: [{
                key: 'distro',
                prompt: 'What distro would you like to add?',
                type: 'role',
                wait: 1,
                validate: t => {
                    if (roles.includes(t)) return true;
                    return 'Sorry, this isn\'t a valid distro role.';
                    
                }

            }]
        });
    }

    async run (message, { distro }) {
        if (message.channel.id !== '361120040524972032') return message.channel.send('All roles should be requested in #role-request.');
        message.delete();
        message.member.addRole(distro).catch(e => {
            return message.reply('Sorry, this role could not be assigned.').then(m => m.delete({timeout: 3000}));
        });
        message.reply(`You have been successfully updated to **${distro.name}** :thumbsup:`).then(m => m.delete({timeout: 3000}));


        /*
        if (!distro) {
            message.member.setNickname(message.author.username);
            return message.reply('Your role has been reset!');
        }
        let newNick;
        var nickname = message.content.replace(`./distro`, '').trim();
        newNick = message.author.username + ' [' + nickname + ']';

    
        let toAdd = await Distro.findOne({
            distro
        });
        if (!toAdd) return message.reply(`Sorry, the distro **${distro}** didn't exist. If you know its correct, contact a server admin to get it added.`);
        message.member.setNickname(newNick).catch(e => message.reply('Sorry, I cannot change your nickname.'));
        message.reply(`You have been successfully updated to **${distro}** :thumbsup:`); */
    }
};