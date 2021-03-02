module.exports = {
    name: 'rroles',
    description: "sets up roles using reactions for the roles channel",
    async execute(client, message, args, Discord) {
        const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
        if (message.member.roles.cache.some(r => r.name === "Mods" || r.name === "LongTimeFriens")) {
            const channel = "816203655845642270";

            const update = message.guild.roles.cache.find(role => role.name === "Updates");
            const vrchat = message.guild.roles.cache.find(role => role.name === "VRchat");
            const ffxiv= message.guild.roles.cache.find(role => role.name === "FFXIV");
            const nsfw = message.guild.roles.cache.find(role => role.name === "NSFW");
            const theme = message.guild.roles.cache.find(role => role.id === "799227126653779979");

            const updateEmoji = '🌈';
            const vrchatEmoji = '😈';
            const ffxivEmoji = '🏰';
            const nsfwEmoji = '🔞';
            const themeEmoji = '💖';


            let embed = new Discord.MessageEmbed()
                .setColor('#FFA0C9')
                .setTitle('Roles')
                .setDescription('Please react to the roles you would like to receive\n\n'
                    + `${updateEmoji} to receive pings with updates\n\n`
                    + `${vrchatEmoji} to view VRchat content\n\n`
                    + `${ffxivEmoji} to view FFXIV content\n\n`
                    + `${nsfwEmoji} if you would like to see NSFW content\n\n`
                    + `${themeEmoji} for the theme of the week role`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(updateEmoji);
            messageEmbed.react(vrchatEmoji);
            messageEmbed.react(ffxivEmoji);
            messageEmbed.react(nsfwEmoji);
            messageEmbed.react(themeEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {

                    if (reaction.emoji.name === updateEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(update);
                    }
                    if (reaction.emoji.name === vrchatEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(vrchat);
                    }
                    if (reaction.emoji.name === ffxivEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(ffxiv);
                    }    
                    if (reaction.emoji.name === nsfwEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(nsfw);
                    }
                    if (reaction.emoji.name === themeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(theme);
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
                    
                    if (reaction.emoji.name === updateEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(update);
                    }
                    if (reaction.emoji.name === vrchatEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(vrchat);
                    }
                    if (reaction.emoji.name === ffxivEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(ffxiv);
                    }
                    if (reaction.emoji.name === nsfwEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(nsfw);
                    }
                    if (reaction.emoji.name === themeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(theme);
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