function logInValidate(req, res, next) {
  if (req.session.isLogIn) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = logInValidate;
