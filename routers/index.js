const router = require("express").Router();
const logIn = require("../controllers/login");
const User = require("../controllers/User");

router.get("/login", logIn.showLogIn);
router.post("/login", logIn.logIn);
router.get(
  "/",
  (req, res, next) => {
    if (!req.session.isLogIn) {
      logIn.showLogIn;
    } else {
      next();
    }
  },
  User.showHome
);

module.exports = router;
