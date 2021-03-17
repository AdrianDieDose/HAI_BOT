module.exports = {
    name: 'wichteln',
    description: 'Raffles teams',
    execute(client, message, args) {
        let pplArray = [];
        let groupsArray = [];
        let error = false;

        args.forEach(id => {
            if(id[0] !== '<'){
                error = true;
            }
        })

        if(error) {
            message.channel.send("Something went wrong :c You must add members with @member.");
        } else {
            args.forEach(id => {
                pplArray.push(id.replace(/[\\<>@#&!]/g, ""));
            })
        }




       
            var arr1 = pplArray.slice(), // copy array
                arr2 = pplArray.slice(); // copy array again
        
            arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
            arr2.sort(function() { return 0.5 - Math.random();});
        
            while (arr1.length) {
                var name1 = arr1.pop(), // get the last value of arr1
                    name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
                    //        ^^ if the first value is the same as name, 
                    //           get the last value, otherwise get the first

                client.users.cache.get(name1).send(`Dein wichtel: <@${name2}>`);
             //   console.log(name1 + ' gets ' + name2);
            }


    }
}