const express = require("express");
const app = express();
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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.use(routers);

app.listen(port);