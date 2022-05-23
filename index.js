const express = require("express");
const app = express();
const models = require("./models");

app.use(express.json());

app.get("/user", (req, res) => {
  models.user_game.findAll().then((users) => {
    res.status(200).send(users);
  });
});

app.post("/user", (req, res) => {
  models.user_game
    .create({
      username: req.body.username,
      password: req.body.password,
    })
    .then((user) => {
      return res.status(201).send(user);
    });
});

app.listen(3000, () => {
  console.log("server is running ...");
});
