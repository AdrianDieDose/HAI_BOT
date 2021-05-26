
module.exports = {
    name: 'summonfriends',
    description: 'This summons all friends!',
    execute(message, args) {
        console.log(onlineMembers);
        message.channel.send('-summenfriends | Summons all online friends!');

      /*  client.guilds.cache.forEach((guild) => {
            const members = guild.members.cache
          
            const onlineUsers = members.filter((member) => {
              const { status } = member.user.presence
              return status === 'online' || status === 'dnd'
            })
          
            let message = 'Hey '
          
            onlineUsers.forEach(({ user }) => {
              message += `<@${user.id}> `
            })
          
            message += 'How are you?'
            console.log(message)
          
            const channelId = '' // TODO: Fetch the message for this specific guild from MongoDB or similar
            const channel = guild.channels.cache.get(channelId)
          
            // TODO: Send the message to the channel
            
          })
          */
    }
}