const express = require("express");
const app = express();
const { User_game } = require("./models");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/add-data", (req, res) => {
  res.render("add_data");
});

app.post("/api/v1/add_user", (req, res) => {
  User_game.create({
    username: req.body.username,
    password: req.body.password,
  }).then((user) => {
    return res.status(201).send(user);
  });
});

app.post("/api/v1/login", (req, res) => {
  if (req.body.username == "ridho" && req.body.password == "123456") {
    res.redirect("/dashboard");
  } else {
    respon = "login gagal";
  }

  res.status(201).send(respon);
});

app.get("/api/v1/users", (req, res) => {
  User_game.findAll().then((users) => {
    res.status(200).send(users);
  });
});

app.get("/api/v1/user/:id", (req, res) => {
  User_game.findOne({
    where: { id: req.params.id },
  }).then((article) => {
    return res.status(201).send(article);
  });
});

app.put("/api/v1/update_user/:id", (req, res) => {
  User_game.update({
    username: req.body.username,
    password: req.body.password,
  }).then((article) => {
    res.status(201).send({
      status: "ok",
      message: "data berhasil diupdate",
    });
  });
});

app.delete("/api/v1/delete_user/:id", (req, res) => {
  User_game.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.send({
      status: "ok",
      message: "data berhasil dihapus",
    });
  });
});

app.listen(3000, () => {
  console.log("server is running ...");
});
