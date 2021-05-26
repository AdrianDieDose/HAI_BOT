const Discord = require('discord.js');

const client = new Discord.Client();

const guild = new Discord.Guild();

const prefix = '-';

const fs = require('fs');

const secretClientId = require("../ID/clientid.js");

const memberCount = require("./member-count");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'));

/*Join message*/
client.on('guildMemberAdd', member =>{
    const welcomeChannel = client.channels.cache.find(channel => channel.id === "821715172451680328");
    welcomeChannel.send('Brrrrrrrrrr! **' + member.user.username + '** joined '+ "**" + member.guild.name + "**!");

});

client.once('ready', () => {
    console.log('HAI_BOT is online uwu!');
    client.user.setActivity("Slapping Brinkhoffs ass 👋");
    memberCount(client);
   // console.log(client.user(529619290886766592));
});

// Loops thru files to find commands.
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Checks chat.
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Add commands to look for in chat. Add new commands in the commands folder.
    switch (command) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
        break;
        case 'spam':
            client.commands.get('spam').execute(message, args);
        break;
        case 'help':
            client.commands.get('help').execute(message, args);
        break;
        case 'wichteln':
            client.commands.get('wichteln').execute(client, message, args);
        break;
        case 'count':
            client.commands.get('count').execute(message, client);
        break;
     //   case 'summonfriends':
     //       
     //   break;
    }
});











client.login(secretClientId.clientId);
