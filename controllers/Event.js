let { EventUser, Event, Game } = require("../models");
let sendEmail = require("../helpers/sendEmail");
class EventController {
  static joinEvent(req, res) {
    let whatEventId = null;
    EventUser.create(
      {
        EventId: req.params.eventId,
        UserId: req.session.userId
      },
      {
        returning: true
      }
    )
      .then(resJoin => {
        whatEventId = resJoin.EventId;
        return Event.findAll({
          where: {
            id: whatEventId
          }
        });
      })
      .then(resEvent => {
        sendEmail(
          req.session.email,
          "You have successfully joined a new Event!",
          `You just joined a new event by the name of ${resEvent[0].name} in ${resEvent[0].location}. Don't be late. It starts at ${resEvent[0].start_date}! `
        );
        res.redirect("/users");
      })
      .catch(err => res.send(eru));
  }

  static unjoinEvent(req, res) {
    EventUser.destroy({
      where: {
        EventId: req.params.eventId
      }
    })
      .then(resUnjoin => {
        res.redirect("/users");
      })
      .catch(err => res.send(err));
  }

  static deleteEvent(req, res) {
    Event.destroy({
      where: {
        id: req.params.eventId
      }
    })
      .then(resDelete => {
        res.redirect("/users");
      })
      .catch(err => res.send(err));
  }

  static editEvent(req, res) {
    Event.findAll({
      where: {
        id: req.params.eventId
      },
      include: [Game],
      returning: true
    })
      .then(resEdit => {
        console.log(resEdit[0].name)
        res.render("event-edit", { data: resEdit[0] });
      })
      .catch(err => res.send(err));
  }
}
module.exports = EventController;
