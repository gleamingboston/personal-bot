const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === ':ping') {
    	message.reply('pong');
  	}
});
client.on('message', message => {
    if (message.content === ':cmds') {
    	message.reply('Right I can do :ping, :noob, and many more');
  	}
});
client.on('message', message => {
    if (message.content === ':noob') {
    	message.reply('you are a noob mama');
  	}
});
client.on('message', message => {
    if (message.content === 'prefix') {
    	message.reply('The prefix is :');
  	}
});
client.on('message', message => {
    if (message.content === 'sam') {
    	message.reply('sam is my boi u understand, you dont touch him.');
  	}
});

// THIS MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
