module.exports = {
    name: 'twitch',
    description: "testing twitch links",
    execute(message, args) {
        if(message.member.roles.cache.has('816105392366157833')) {
            message.channel.send('https://www.twitch.tv/ratedepicz')

        }else {
        message.channel.send('No permiso :(');
        }
    }
}