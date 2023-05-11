const fs = require('fs');

const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]});
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


    client.once('ready', () => {
        client.user.setActivity('LifeDiamondEchoSmp.tk', { type: 'PLAYING' });

        for (const file of commandFiles) {
            // Register commands
            let command = require(`./commands/${file}`);
            client.commands.set(command.name, command);
        }

        console.log('LIFEDIAMONDECHOSMP is online');
    });

    const prefix = 'LDESMP!';

    client.on('messageCreate', (message) => {
        if (message.content.bot) {
            return;
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === 'test') {
            client.commands.get('test').execute(message);
        } else  if (command === 'kick') {
            client.commands.get('kick').execute(message, args, message);
        } else  if (command === 'help') {
            client.commands.get('help').execute(message, args, message);
        } else  if (command === 'ban') {
            client.commands.get('ban').execute(message, args, message);
        } else  if (command === 'joke') {
            client.commands.get('joke').execute(message, args, message);
        }  //else if (command === 'Help') {
        //    client.commands.get('Help').execute(message);
       // }
    });
    