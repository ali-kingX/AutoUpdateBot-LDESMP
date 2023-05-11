const { MessageEmbed, Permissions } = require("discord.js");
const ms = require('ms');

module.exports = {
    name: 'ban',
    description: 'Bans a member from the server.',
    async execute(message, client, args) {
        if (message.member.permissions.has([Permissions.FLAGS.BAN_MEMBERS])) {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been banned");
            } else {
                message.channel.send(`You coudn't ban that member!`);
            }
        }
   

    }
}