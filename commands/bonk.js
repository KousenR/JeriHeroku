module.exports = {
    name: 'bonk',
    description: "this command bonks",
    execute(client, message, args){
        if(!args[0]) return message.reply("Please bonk someone");
        else {
            const taggedUser = message.mentions.users.first();
            message.delete();
            message.channel.send(message.member.displayName + ` has BONKED ${taggedUser}`);
        }
    }
}