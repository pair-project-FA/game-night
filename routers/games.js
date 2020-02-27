const router = require("express").Router();
const Controller = require("../controllers/Game");
const logInValidate = require("../helpers/loginValidation");

router.get("/:gameId", logInValidate, Controller.showGamePage);
router.get("/:gameId/create", logInValidate, Controller.showCreateEventPage);
router.post("/:gameId/create", Controller.createEvent);

module.exports = router;
