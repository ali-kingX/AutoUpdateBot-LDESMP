const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js');

module.exports = {
    name: 'poll',
    description: "This command creates a poll!",
    async execute(client, message, args) {

        if(message.channel.id != '981290479071146085'){return message.reply("No permision or command doesnt exist.")}
        const { c } = await import('tcol');

        let theDescription = args.slice(0).join(" ") //defining theDescription

        if(!theDescription) return message.reply("Please specify a question for the poll!") // if there is no ags 0 then it will send an alert to the user

        const pollEmbed = new MessageEmbed() //define pollEmbed
        .setColor("YELLOW")
        .setTitle(`POLL by ${message.author.tag}`)
        .setDescription(theDescription);

        let msgEmbed = await message.reply({ embeds: [pollEmbed] }) //sends poll embed with the other things below
        await msgEmbed.react('✅') //Reacts with a check mark
        await msgEmbed.react('❌')// Reacts with an X
}, catch (err) {
    const unexpErrEmbed = new MessageEmbed() //embed or smthing error
        .setTitle('Unexpected Error')
        .setColor('RED')
        .setURL('https://discord.gg/KQbAPsWtar')
        .setDescription('Not fun! An unexpected error occurred.');

    console.info(c.Yellow(`${message.author.tag} (${message.author.id}) triggered an interaction in #${message.channel.name} unsuccessfully. Command: gg!rps ${target}`));
    console.error(c.Red(err));

    return message.reply({ embeds: [unexpErrEmbed] });
}
}