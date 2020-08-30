const Discord = require('discord.js');

const client = new Discord.Client();

const guild = new Discord.Guild();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

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
     //   case 'summonfriends':
     //       
     //   break;
    }
});

client.once('ready', () => {
    console.log('Tiefsee is online uwu!');
   // console.log(client.user(529619290886766592));
});









client.login('NzM2MjE2NjU3MzYxNjMzMzIw.XxrlMQ.EGAcJ17O_fXZKcVrDmsCKaEcvnU');