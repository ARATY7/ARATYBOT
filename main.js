const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
	console.log(`Connecté sur ${client.user.tag}!`);
});
client.on('message', msg => {
	if (msg.content === prefix + 'tgn') {
		msg.reply('https://i.imgur.com/DcrXltT.png');
	}
});
client.on('message', msg => {
	if (msg.content === prefix + 'mail') {
		msg.reply('le mail du pro : nhenchoz122@icloud.com');
	}
});

const characters = '=';

function generateString(length) {
	let result = ' ';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

client.on('message', msg => {
	if (msg.content === prefix + 'bite') {
		msg.reply('ton pénis : ' + '8' + generateString(Math.floor(Math.random() * 50 + 1)) + 'D');
	}
});

client.login('process.env.BOT_TOKEN');
