module.exports = {
    name: 'count',
    description: 'This is a count command!',
    execute(message, client) {
        const guild = client.guilds.cache.get("821715171751755796");
        const memberCount = guild.memberCount.toLocaleString();
        message.channel.send('We are now ' + memberCount + ' members.');
            
        
    }
}
