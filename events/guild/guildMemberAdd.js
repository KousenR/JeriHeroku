module.exports = (Discord, client, message) => {
    client.on('guildMemberAdd', guildMember =>{
            guildMember.guild.channels.cache.get('530010536864251917').send(`I guess I'm glad you're here, <@${guildMember.user.id}> ` 
                    + '...make sure to read the rules channel or else.')})

}