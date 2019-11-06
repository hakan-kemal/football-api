const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(teams => {
      response.send(teams);
    })
    .catch(next);
  //   response.send("Welcome to the homepage!");
});

console.log("Connected to router.js");

module.exports = router;
