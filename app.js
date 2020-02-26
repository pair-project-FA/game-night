const express = require("express");
const app = express();
const port = 3000;
const routers = require("./routers");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

app.use(routers);

app.listen(port, (req, res) => console.log(`I love you ${port}.`));
