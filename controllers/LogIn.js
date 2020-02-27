let { User } = require("../models");

class LogInController {
  static showLogInPage(req, res) {
    let error = req.session.errorLogInMessage || null;
    res.render("login-page", { error });
  }

  static logIn(req, res) {
    let { username, password } = req.body;
    User.findAll({
      where: {
        username: username,
        password: password
      }
    })
      .then(resLogIn => {
        if (resLogIn.length > 0) {
          req.session.isLogIn = true;
          req.session.userId = resLogIn[0].id;
          req.session.email = resLogIn[0].email;
          res.redirect("/");
        }
        if (!req.session.isLogIn) {
          req.session.errorLogInMessage = `Sorry, the username/password you inputted may be false. please try again`;
          res.redirect("/login");
        }
      })
      .catch(err => res.send(err));
  }

  static logOut(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }
}

module.exports = LogInController;
