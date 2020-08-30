module.exports = {
    name: 'help',
    description: 'Lists all commands!',
    execute(message, args) {
        message.channel.send('-help | Lists all commands.');
        message.channel.send('-spam (text to spam) | Spams a message.');
        message.channel.send('-ping | Pong!');
     //   message.channel.send('-summenfriends | Summons all online friends!');
    }
}