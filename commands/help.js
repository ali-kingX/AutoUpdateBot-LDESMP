const { Channel, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "This command is for info!",
    async execute(message) {

            const helpEmbed = new MessageEmbed()
                .setTitle('LDESMP Help')
                .setColor('ORANGE')
                .setURL("https://discord.gg/aFhBMycP")
                .setDescription(`
                    *Prefix: LDESMP!*\n
                    **Here is the list of commands:**
                `)
                .addField(
                    'ban <username> <time>',
                    'Ban Cmd',
                    true
                )
                .addField(
                    'Warn',
                    'Warn Cmd.',
                    true
                )
                .addField(
                    'kick',
                    'A kick cmd.',
                    true
                )
                .addField(
                    'Poll',
                    'A command that gives you a poll.',
                    true
                );
            return message.reply({ embeds: [helpEmbed] });
        }
};