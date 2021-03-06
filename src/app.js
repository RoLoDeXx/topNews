const path = require("path");
const express = require("express");
const hbs = require("hbs");

const NewsArticles = require("./utils/news");
const Trends = require("./utils/trends");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../templates/partials"));
app.set("views", path.join(__dirname, "../templates/views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  // if (!req.query.q) return res.send("add a phrase");
  NewsArticles(req.query.q, (error, response) => {
    if (error) return console.log("error in news");
    res.render("index", {
      news: response
    });
  });
});

app.get("/trends", (req, res) => {
  Trends(req.query.q, (error, response) => {
    if (error) return console.log("error in trending");
    //res.send(response);
    res.render("trending", {
      news: response
    });
  });
});

app.get("*", (req, res) => {
  res.render("404");
});
app.listen(port);
