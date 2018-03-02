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
      message.channel.send("...W-What? I-I mean I appreciate it, but...");
  } else
  if (message.content === "you know, like, nya?") {
      message.channel.send("...N-Nya....");
  } else
  if (message.content.toUppercase() === "SAHIL") {
      message.channel.send("Don't do drums, kids.");
// thank u shini!!!!
  } else
  if (message.content === "traps") {
      message.channel.send("Are fucking gay.");
  } else
  if (message.content === "cats") {
      message.channel.send("The single best animal on planet earth.");
  } else
  if (message.content === "tomo") {
      message.channel.send("Some gayboy.");
  } else
  if (message.content === "i want to kiss momo") {
      message.channel.send("https://www.youtube.com/watch?v=ijV8VmITQss");
  } else
  if (message.content.startsWith(prefix + "stone")) {
    message.channel.send("I will bind you to a chair, light your hair on fire, bind sixteen pencils together with a rubber band and put it against your chest to cause small wounds on you, and then I will proceed to chop your fingers off and force you to choke them down while I use a chainsaw to rip your asshole a new one.");
  } else
  if (message.content.startsWith(prefix + "boobs")) {
    message.channel.send("Heh. Nice.");
  } else
  if (message.content.startsWith(prefix + "harper")) {
    message.channel.send("I will live record wolves eating your demon-infested body to your entire family and laugh. I'll make sure to save an arm or a leg so I can stuff it and mount it on my wall as a trophy. Your eyes will be stored in a jar for safe keeping, by the way. You know, to keep the demons from escaping!");
  } else
  if (message.content.startsWith(prefix + "nico")) {
    message.channel.send("Nico Nico Nii~!");
  } else
  if (message.content.startsWith(prefix + "klance")) {
    message.channel.send("Are you actually fucking retarded?");
  } else
  if (message.content.startsWith(prefix + "thighs")) {
    message.channel.send("https://pa1.narvii.com/6183/32333df4d2047cf88923eadcc91ae425a0e905c0_hq.gif");
  } else
  if (message.content.startsWith(prefix + "hug")) {
    message.channel.send("https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
