const axios = require('axios');
const key = require('./apiKey');
// axios.defaults.headers.common['Authorization'] = key; //apparently I don't need this -___-

//------ this is making a get request to the NASA API
module.exports = (query) => {
  return axios({
    url: '/search', 
    method: 'get',
    baseURL: 'https://images-api.nasa.gov',
    params: {
      media_type: 'image',
      year_start: 2000,
      q: query,
    }
  })
}
