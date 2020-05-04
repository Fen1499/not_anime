const axios = require('axios');
const gqlQuery = require('../utils/anlsearch.js');

async function execute(message, args) {
  const baseURL = 'https://graphql.anilist.co';
  const gqlVars = {"search": args.join(" ")}

  //Embed que vai na mensagem, tem o objeto "med" como argumento \u200b
  const makeEmbed = med => ({
      "color":"0x0099ff",
      "title":`${med.title.english}`,
      "fields": [
        {"name": med.title.native, "value": med.title.romaji},
        {"name":"Type" , "value":med.type, "inline": true},
        {"name":"Mean Score" , "value":med.meanScore, "inline": true},
        {"name": "Source", "value": med.source, "inline": true},
        {
          "name": med.format,
          "value": med.volumes ? `${med.volumes} volumes` : `${med.episodes} episodes`,
          "inline":true
        }
      ],
      "description":`${med.description.slice(0,256).replace(/<br>/g, '')}...`,
      "thumbnail": {
        "url": med.coverImage.medium,
      },
      "type":"rich"
    })
    

    await axios({
    method:'post',
    url: baseURL,
    data: {
      "query": gqlQuery.query,
      "variables": gqlVars
    }
  })
  .then(response => {
    const anl_med = response.data.data.Media;
    return makeEmbed(anl_med)
  })
  .then(msgEmbed => {
   message.channel.send({embed: msgEmbed})
  })
  .catch(error => {
   message.reply("error");
  });
}


module.exports = {
	name: 'anl',
	description: 'info',
  args: true,
	execute
};