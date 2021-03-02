module.exports = {
    name: 'help',
    description: "embed helper",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#730073')
        .setTitle('Ayudame')
        //.setURL('https://www.twtich.tv/ratedepicz')
        .setDescription("Judge, Jeri, and Executioner")
        .addFields(
            {name: 'About', value: "This bot is meant to condense useful commands into one bot"},
            {name: 'Commands', value: "~bonk - bonks someone with an @\n"
            + "~destroy - deletes messages (only if you have permission)"}
        )
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbR5DCBgn0jeegqE127m2DXN7EPCcLi4020w&usqp=CAU')
        .setFooter("Bot is made by Kousen#2486");

        message.channel.send(newEmbed);
    }
}