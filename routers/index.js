const router = require("express").Router();
const usersRouter = require("../routers/users");
const gamesRouter = require("../routers/games");
const eventsRouter = require("../routers/events");
const logInController = require("../controllers/LogIn");
const homeController = require("../controllers/Home");
const logInValidate = require("../helpers/loginValidation");

router.get("/login", logInController.showLogInPage);
router.post("/login", logInController.logIn);
router.get("/logout", logInController.logOut);
router.get("/", logInValidate, homeController.showHomePage);
router.use("/users", usersRouter);
router.use("/games", gamesRouter);
router.use("/events", eventsRouter);

module.exports = router;
