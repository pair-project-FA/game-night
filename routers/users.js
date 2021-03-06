const router = require("express").Router();
const Controller = require("../controllers/User");
const logInValidate = require("../helpers/loginValidation");

router.get("/", logInValidate, Controller.showProfilePage);

module.exports = router;
