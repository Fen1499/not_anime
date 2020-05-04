async function execute(message, args) {
  
  const actor = message.mentions.members.first().user || message.author
  const msgEmbed = {
    "color":"0x0099ff",
    "title":actor.username,
    "image": {
      "url":actor.displayAvatarURL(dynamic=true)
    }
  }

  message.channel.send({embed: msgEmbed});
}

module.exports = {
	name: 'avatar',
  description: 'info',
  args: false,
	execute
};