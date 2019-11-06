const axios = require("axios");

exports.handler = function fixerCurrencies(event, context, callback) {
  const endpoint = "http://data.fixer.io/api/latest";
  const token = process.env.FIXER_ACCESS_TOKEN;

  axios
    .get(endpoint, {
      params: {
        access_key: token
      }
    })
    .then(response => {
      callback(null, {
        statusCode: 200,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(response.data)
      });
    })
    .catch(e => {
      callback(e);
    });
};
