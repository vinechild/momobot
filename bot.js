const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'm!ping') {
    	message.channel.send("pong!");
  	} else
        
        if (message.content === 'm!foo') {
            message.channel.send("bar!");
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
