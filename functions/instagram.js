const axios = require("axios");

exports.handler = function instagram(event, context, callback) {
  const endpoint = "http://data.fixer.io/api/latest";
  const token = "7213b9a7b8b59ce8e6087fe3ba8243c2"; //process.env.FIXER_ACCESS_TOKEN;

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
