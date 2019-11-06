const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (request, response, next) => {
  console.log("Welcome to the homepage!");
  Team.findAll()
    .then(teams => {
      response.send(teams);
    })
    .catch(next);
});

router.post("/team", (request, response, next) => {
  console.log("Body that corresponds to this request?", request.body);
  Team.create(request.body)
    .then(team => {
      response.send(team);
    })
    .catch(next);
});

console.log("Connected to router.js");

module.exports = router;
