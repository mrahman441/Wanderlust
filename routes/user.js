const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { storeReturnTo } = require("../middleware.js");

// import controllers
const users = require("../controllers/users.js");

router.route('/signup')
    .get(users.renderSignupForm)
    .post(wrapAsync(users.signup));

router.route('/login')
    .get(users.renderLoginForm)
    .post(storeReturnTo, // redirect to the url they are requesting after loginS
        users.login);

router.get("/logout", users.logout);

module.exports = router;