module.exports = client => {
    const channelId = "822127968640827392";

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId);
        channel.setName(`Memebers: ${guild.memberCount.toLocaleString()}`);
        
    }

    client.on("guildMemberAdd", member => updateMembers(member.guild));
    client.on("guildMemberRemove", member => updateMembers(member.guild));

    const guild = client.guilds.cache.get("821715171751755796");
    updateMembers(guild);
};