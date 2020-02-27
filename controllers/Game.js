let { Game, Event } = require("../models");
let combineDate = require("../helpers/combineDate");
let sendEmail = require("../helpers/sendEmail");

class GameController {
  static showGamePage(req, res) {
    let gameData = null;
    Game.findAll({
      where: {
        id: req.params.gameId
      }
    })
      .then(resGame => {
        gameData = resGame[0];
        
        return Event.findAll({
          where: {
            GameId: req.params.gameId
          }
        });
      })
      .then(resEvent => {
        res.render("game", { data: gameData, events: resEvent });
      })
      .catch(err => res.send(err));
  }

  static showCreateEventPage(req, res) {
    Game.findAll({
      where: {
        id: req.params.gameId
      }
    })
      .then(resGame => {
        res.render("event-create", { data: resGame[0] });
      })
      .catch(err => res.send(err));
  }

  static createEvent(req, res) {
    let {
      name,
      location,
      start_date,
      start_time,
      end_date,
      end_time
    } = req.body;
    start_date = combineDate(start_date, start_time);
    end_date = combineDate(end_date, end_time);
    Event.create({
      name,
      location,
      start_date,
      end_date,
      GameId: req.params.gameId,
      UserId: req.session.userId
    })
      .then(resEvent => {
        sendEmail(
          req.session.email,
          "You have successfully created a new Event!",
          `You just created a new event by the name of ${name} in ${location}. Don't be late. It starts at ${start_date}! `
        );
        res.redirect(`/games/${req.params.gameId}`);
      })
      .catch(err => res.send(err));
  }
}

module.exports = GameController;
