const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
// const db = require("./db");
// const Team = require("./team/model");
const teamRouter = require("./team/router");

app.get("/", (req, res) => {
  res.send("Hello Football API!");
});

app.use(teamRouter);

app.listen(port, () => {
  console.log(`Example app listening on port! ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.
