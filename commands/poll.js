module.exports = {
    name: 'poll',
    description: 'Makes a poll',
    execute(message, client, args) {
        let pollActive = true;
        if(pollActive){
            if(args[0] == "start" && args.length > 1 ){
                const topic = args[1];
                const options = [];
                message.channel.send("Poll topic: " + topic);
                    for(let i = 2;i < args.length;i++){
                        message.channel.send("Option " + (i-1) + ": " + args[i]);
                        options.push([args[i], 0]);
                    }
                console.log(options);
            } else if(args[0] == "vote"){

            } else if(args[0] == "end"){

            } else if(args[0] == "status"){

            } else if(args[0] == "help"){
                message.channel.send('-poll help | Prints all help commands');
                message.channel.send('-poll start [**topic**] | [**option1**] [**option2**] [**option3...**] | Start poll with the topic and options');
                message.channel.send('-poll vote [**1/2/3...**] | Vote on poll');
                message.channel.send('-poll status | Shows polls status');
                message.channel.send('-poll end | End poll');
            } else {
                pollActive = false;
                options = [];
                message.channel.send('-poll help | Prints all help commands');
            }




        }
        
    }

}
