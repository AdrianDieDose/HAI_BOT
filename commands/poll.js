module.exports = {
  name: "poll",
  description: "Makes a poll",
  topicChoosen: false,
  optionsChoosen: false,
  topic: [],
  options: [],
  pollOwnersId: "",
  pollOwnersName: "",
  pollVotersIds: [],
  execute(message, client, args) {
    // Add user validation ?
    if (args[0] == "topic" && args.length > 1) {
      this.pollOwnersId = message.author.id;
      this.pollOwnersName = message.author.username;
      this.topic = args.slice(1, args.length);
      this.topicChoosen = true;
      message.channel.send("Poll owner: **" + this.pollOwnersName + "**");
      message.channel.send("Poll topic: **" + this.topic.join(" ") + "**");
    } else if (args[0] == "options" && message.author.id == this.pollOwnersId) {
      if (this.topicChoosen) {
        this.options = [];
        for (let i = 1; i < args.length; i++) {
          message.channel.send("Option " + i + ": " + args[i]);
          this.options.push([args[i], 0]);
          this.optionsChoosen = true;
        }
      } else {
        message.channel.send(
          "You need to specify a **Topic** first! | Type **-poll help** to find out more."
        );
      }

      //Voteing logic needs to be implimented !!!!!!!!
    } else if (args[0] == "vote" && this.optionsChoosen == true) {
      // Checks for duplicate voter
      let i = 0;
      do {
        if (message.author.id == this.pollVotersIds[i]) {
          message.channel.send(
            "You've already voted, **" + this.pollOwnersName + "**!"
          );
          return;
        } else {
          i++;
        }
      } while (i < this.pollVotersIds);
      this.pollVotersIds.push(message.author.id);
      
      //Checks for valid input
      console.log(parseInt(args[1]));
      console.log(this.options.length);
      if(parseInt(args[1]) > this.options.length || parseInt(args[1]) <= 0 || isNaN(parseInt(args[1]))){
        message.channel.send("Invalid voting option...");
        return;
      } else {
        this.options[parseInt(parseInt(args[1]))-1][1]++;
        console.log(this.options[parseInt(args[1])-1][1]);
        console.log(this.options);
      }
    } else if (args[0] == "end" && message.author.id == this.pollOwnersId) {

    } else if (args[0] == "status") {
      message.channel.send("Poll owner: **" + this.pollOwnersName + "**");
      message.channel.send("Poll topic: **" + this.topic.join(" ") + "**");
      for (let i = 0; i < this.options.length; i++) {
        message.channel.send("Option " + (i + 1) + ": " + this.options[i][0]);
      }
    } else if (args[0] == "help") {
      message.channel.send("-poll help | Prints all help commands.");
      message.channel.send("-poll topic [**topic**] | Specifies poll topic.");
      message.channel.send(
        "-poll options [**option1**], [**option2**] ... | Specifies poll options."
      );
      message.channel.send("-poll vote [**1/2/3...**] | Vote on poll.");
      message.channel.send("-poll status | Shows polls status.");
      message.channel.send("-poll end | End poll.");
    } else {
      //Needs a reset fix... if no argument is casted everything is reset... what we dont want of course
      //console.log("test rip");
      this.optionsChoosen = false;
      this.topicChoosen = false;
      this.topic = [];
      this.options = [];
      this.pollOwnersId = "";
      this.pollVotersIds = [];
      this.pollOwnersName = "";
      message.channel.send("-poll help | Prints all help commands.");
    }
  },
};
