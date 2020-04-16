async function execute(message, args) {
  const msgEmbed = {
    "color":"0x0099ff",
    "title":message.author.username,
    "image": {
      "url":message.author.displayAvatarURL(dynamic=true)
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