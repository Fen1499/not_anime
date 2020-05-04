const config = require('./config.json');

// require file system
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
//20 dias depois não lembro mais disso, insere os nomes dos arquivos na collection eu acho
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

//read the messages
//Esse () é opcional, da pra passar só o argumento sem (), que fica horrivel de ler
client.on('message', (message) => {

  ///SETUP INICIAL, SEPARA COMMAND DE ARGS
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  const args = message.content.slice(config.prefix.length).split(/ +/);
  //shift devia se achamar pop, mas já existe um pop
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;//
  
  //command é o arquivo com o nome correspondente, eles seguem um padrão bem simples
  const command = client.commands.get(commandName);
  if(command.args && !args.length) {
    message.reply("args error :sad:");
    //Manter isso aqui por enquanto pra lidar com args error
    //Depois isso aqui pode retornar um help <command>, mas ele não existe ainda
    return;
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Error :sad:');
  }


});

// login to Discord with your app's token
client.login(config.token);
