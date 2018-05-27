const axios = require('axios');
const key = require('./apiKey');
axios.defaults.headers.common['Authorization'] = key;

//------ this is making a get request to the NASA API
module.exports = (query) => {
  return axios({
    url: `/search?q=${query}`, 
    method: 'get',
    baseURL: 'https://images-api.nasa.gov',
    contentType: 'application/x-www-form-urlencoded',
    params:{
      media_type: 'image',
    }
  })
}
