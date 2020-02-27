const router = require("express").Router();
const logInValidate = require("../helpers/loginValidation");
const Controller = require("../controllers/Event");

router.get("/:eventId/join", logInValidate, Controller.joinEvent);

module.exports = router;
