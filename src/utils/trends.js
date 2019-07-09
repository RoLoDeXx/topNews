const request = require("request");
const fetch = require("node-fetch");

const Trends = (topic, callback) => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=c56342e38b764faa9a491db2132bc3e6";
  fetch(url)
    .then(res => res.json())
    .then(json => callback(undefined, json.articles))
    .catch(err => {
      callback("Oops something went wrong", undefined);
    });
};

module.exports = Trends;
