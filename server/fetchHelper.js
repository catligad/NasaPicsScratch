const axios = require('axios');
const key = require('./apiKey');
axios.defaults.headers.common['Authorization'] = key;

const helper = (query) => {
  return axios({
    url: `/search?q=${query}`, 
    method: 'get',
    baseURL: 'https://images-api.nasa.gov',
    contentType: 'application/x-www-form-urlencoded',
  })
}

module.exports = helper;