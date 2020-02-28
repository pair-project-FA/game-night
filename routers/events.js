const router = require("express").Router();
const logInValidate = require("../helpers/loginValidation");
const Controller = require("../controllers/Event");

router.get("/:eventId/join", logInValidate, Controller.joinEvent);
router.get("/:eventId/unjoin", logInValidate, Controller.unjoinEvent);
router.get("/:eventId/delete", logInValidate, Controller.deleteEvent);
router.get("/:eventId/edit", logInValidate, Controller.editEvent);

module.exports = router;
