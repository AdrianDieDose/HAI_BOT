module.exports = {
    name: 'poll',
    description: 'Makes a poll',
    execute(message, client, args) {
        message.channel.send('-poll start [topic] [option1] [option2] [option3] | Start poll with the topic and options');
        message.channel.send('-poll vote [1/2/3] | Vote on poll');
        message.channel.send('-poll end | End poll');
        message.channel.send('test: '+ message + client + args);
        let pollActive = true;
        //while(pollActive){





        //}
    }

}
