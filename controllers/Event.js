let { EventUser } = require("../models");

class EventController {
  static joinEvent(req, res) {
    EventUser.create({
      EventId: req.params.eventId,
      UserId: req.session.userId
    })
      .then(resJoin => {
        res.redirect("/users");
      })
      .catch(err => res.send(err));
  }
}

module.exports = EventController;
