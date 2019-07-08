const request = require("request");
const fetch = require("node-fetch");

const NewsArticles = (topic, callback) => {
  const url =
    "https://newsapi.org/v2/everything?q=" +
    topic +
    "&apiKey=c56342e38b764faa9a491db2132bc3e6";
  fetch(url)
    .then(res => res.json())
    .then(json => callback(undefined, json.articles))
    .catch(err => {
      callback("Oops something went wrong", undefined);
    });
};

module.exports = NewsArticles;
