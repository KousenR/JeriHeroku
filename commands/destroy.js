module.exports = {
    name: 'destroy',
    description: "deletes messages deemed poopy",
    async execute(client, message, args) {
        if(message.member.roles.cache.some(r => r.name === "Mods" || r.name === "LongTimeFriens")) {
            if(!args[0]) return message.reply("Please enter the amount of messages that you want to delete");
            if(isNaN(args[0])) return message.reply("Please enter a real number");

            if(args[0] > 100) return message.reply("You cannot delete more than 100 messages");
            if(args[0] < 1) return message.reply("You must delete at least one message");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);

                message.channel.send("Messages successfully destroyed 😏");
            })
        }else {
            message.reply("I saw that, you're grounded. 👿");
        }
    }
}