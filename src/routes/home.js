/**
 * Module dependencies.
 */

var express = require("express");
var router = express.Router();
// var axios = require('axios');
let path = require("path");

router.get("/", function (req, res, next) {
  res.render("pages/home.html", {
    home: {
      heading: "I don't like spagetti code 👨‍💻",
      img: "https://avatars.githubusercontent.com/u/35335889?v=4",
      name: "Manuel",
      pos: 'Full Stack Dev',
      repo: "See Repo",
      dm: "Message",
    },
  });
});

module.exports = router;
