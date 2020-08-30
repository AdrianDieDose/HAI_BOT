module.exports = {
    name: 'spam',
    description: 'This is a spam command!',
    execute(message, args) {
        for(let i = 0; i < 5; i++) {
            message.channel.send(args.join(' '));
        }
    }
}