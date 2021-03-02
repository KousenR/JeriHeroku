module.exports = {
    name: 'rrules',
    description: "sets up roles using reactions for the rules channel",
    async execute(client, message, args, Discord) {
        if (message.member.roles.cache.some(r => r.name === "Mods" || r.name === "LongTimeFriens")) {
            const channel = '816154138600931329';
            const ruleAgree = message.guild.roles.cache.find(role => role.name === "Members");

            const ruleAgreeEmoji = '✅';

            let embed = new Discord.MessageEmbed()
                .setColor('#FFA0C9')
                .setTitle("Agree To Continue")
                .setDescription('If you agree to the rules above you may enter and unlock the rest of the server.\n\n'
                    + `${ruleAgreeEmoji} react accordingly to continue`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(ruleAgreeEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === ruleAgreeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(ruleAgree);
                    }
                    else {
                        return;
                    }
                }
            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === ruleAgreeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(ruleAgree);
                    }
                    else {
                        return;
                    }
                }
            });
        }
        else{
            message.reply ("I saw that");
        }

    }
}