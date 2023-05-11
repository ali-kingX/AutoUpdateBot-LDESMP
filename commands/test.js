const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'test',
    description: "This is a test command!",
    async execute(message) {
            const testEmbed = new MessageEmbed()
                .setTitle('Test')
                .setColor('GREEN')
                .setURL()
                .setDescription('The bot is working.');

            return message.reply({ embeds: [testEmbed] });
        }
    }