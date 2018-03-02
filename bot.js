const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
// Set the prefix
const prefix = "m!";
client.on("message", (message) => {
    
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  } else
  if (message.content.startsWith(prefix + "cute")) {
    message.channel.send("Something I'm not.");
  } else
  if (message.content === "i love momo") {
      message.channel.send("... W-What? I-I mean I appreciate it, but...");
  } else
  if (message.content === "you know, like, nya?") {
      message.channel.send("... N-Nya....");
  } else
  if (message.content === "sahil" or "Sahil") {
      message.channel.send("Don't do drums, kids.");
  }
      
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
