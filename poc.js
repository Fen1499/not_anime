const axios = require('axios');
const gqlQuery = require('./utils/anlsearch.js');

baseURL = 'https://graphql.anilist.co';
gqlVars = {"search": "fullmetal"}

const poc = axios({
method:'post',
url: baseURL,
data: {
  "query": gqlQuery.query,
  "variables": gqlVars
}
})
.then(response => response)
.catch(error => {
"error"
});

