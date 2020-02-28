let { User, Event, EventUser, Game } = require("../models");

class UserController {
  static showProfilePage(req, res) {
    let userData = null;
    let createdEvents = null;
    User.findAll({
      where: {
        id: req.session.userId
      }
    })
      .then(resUser => {
        userData = resUser[0];
        return Event.findAll({
          where: {
            UserId: req.session.userId
          },
          include: [Game]
        });
      })
      .then(resEvent => {
        createdEvents = resEvent;
        return EventUser.findAll({
          where: {
            UserId: req.session.userId
          },
          include: [
            {
              model: Event,
              include: [Game]
            }
          ]
        });
      })
      .then(resEventUser => {
        res.render("profile", {
          data: userData,
          dataCreate: createdEvents,
          dataJoin: resEventUser
        });
      })
      .catch(err => res.send(err));
  }
}

module.exports = UserController;
