const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`http://newsapi.org/v2/everything?q=tesla&from=2022-04-06&sortBy=publishedAt&apiKey=c4adaad9c2fb42788a7f0102a1cceca0&pageSize=5`);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};
