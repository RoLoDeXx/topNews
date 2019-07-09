const path = require("path");
const express = require("express");
const hbs = require("hbs");

const NewsArticles = require("./utils/news");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "../templates/views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index", {
    title: "Sam"
  });
});

app.get("/news", (req, res) => {
  if (!req.query.q) return res.send("add a phrase");
  NewsArticles(req.query.q, (error, response) => {
    if (error) return console.log("error");
    res.send(response);
  });
});

app.get("*", (req, res) => {
  res.render("404");
});
app.listen(port);
