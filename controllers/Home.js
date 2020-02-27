let { Game, User } = require("../models");

class HomeController {
  static showHomePage(req, res) {
    let dataUser = null;
    User.findAll({
      where: {
        id: req.session.userId
      }
    })
      .then(resUser => {
        dataUser = resUser[0];
        return Game.findAll();
      })
      .then(resGame => {
        res.render("home", { user: dataUser, data: resGame });
      })
      .catch(err => res.send(err));
  }
}

module.exports = HomeController;
