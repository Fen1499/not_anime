async function execute(message, args) {

  //Campos da msg
  const msgFields = [
    ["Server", message.guild.name],
    ["Members", message.guild.memberCount],
    ["Region", message.guild.region]
  ];

  //Função auxiliar para mapear pro formato do objeto embed
  const fieldList = msgFields.map((field) => ({
    "name":field[0],
    "value":field[1],
  }));

  const msgEmbed = {
    "color":"0x0099ff",
    "title":message.guild.name,
    "thumbnail": {
      "url": message.guild.iconURL(dynamic=true),
    },
    "fields": fieldList
  };

  
  message.channel.send({embed: msgEmbed});
}

module.exports = {
	name: 'info',
  description: 'info',
  args: false,
	execute
};