async function execute(message, args) {
    const rouge = message.client.emojis.cache.get("706952258646179900");
    const bleue = message.client.emojis.cache.get("706953279724322886");
    const verte = message.client.emojis.cache.get("706953007052488805");
    
    message.channel.send(`Em construção ${rouge} ${bleue} ${verte}`);
  }
  
  module.exports = {
      name: 'sub',
      description: 'info',
      args: false,
      execute
  };