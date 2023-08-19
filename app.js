const express = require("express");

const app = express();
const homeRoute = require("./src/routes/home");
var path = require("path");
let nunjucks = require("nunjucks"); // templating framework

const port = 4000;

app.use(express.static("public"));
app.set("view engine", "html");

nunjucks.configure(["src/views"], {
  // setting a default views folder for templates
  autoescape: false,
  express: app,
});

app.use("/", homeRoute);

app.listen(port, () => {
  console.log("started on", port);
});
