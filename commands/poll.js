module.exports = {
    name: 'poll',
    description: 'Makes a poll',
    execute(message, client, args) {
        message.channel.send('-poll | Starts poll');
        
    }

}
