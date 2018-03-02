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
  } else
  if (message.content.startsWith(prefix + "sahil")) {
      message.channel.send("Don't do drums, kids.");
  } else
  if (message.content.startsWith(prefix + "mira")) {
      message.channel.send("A demon, simple as that. A kind one, but one who simply knows too much. Please never contort like a fucking beast from hell ever again.");
  } else
  if (message.content.startsWith(prefix + "smooch")) {
    message.channel.send("A-Ah... Why would you do that? T-that's..... Oh my god... A-ahahaha.... I'm not... s-sure how to respond to that.... A-aaah.... I need to g-go flush my face with w-water...");
  } else
  if (message.content === "momo, dab for me") {
      message.channel.send("No. Please go die.");
  } else
  if (message.content === "momo, do you like pussy?") {
      message.channel.send("For sure! The feeling of a cat's fur on my hands and on my cheeks, the gentle purring in my ear, the rough but sweet licks on my face and hands as they knead my bossom, thighs and abdomen to get comfortable, as to create a blanket of warmth over me... You expected me to say something about vag, didn't you?");
  } else
  if (message.content === "momo, are you gay?") {
      message.channel.send("None of your business. Piss off. Ask again when you're older.");
  } else
  if (message.content === "i'm older, momo!") {
      message.channel.send("Are you seriously *that* persistant to know my sexuality?");
  } else
  if (message.content.startsWith(prefix + "pizzapasta")) {
    message.channel.send("Pizza! Pasta! Nobody fucking cares~!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
