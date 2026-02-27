const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");

router.get("/signup", (req, res) => {
    res.render("users/signup");
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        console.log(registeredUser);

        req.flash("success", "Welcome to Wanderlust!");
        res.redirect("/listings");
    } catch (e) {
        const { username, email, password } = req.body;
        res.render("users/signup", { signupError: e.message, username, email, password });
    }
}));

router.get("/login", (req, res) => {
    res.render("users/login");
});

// basic version
// router.post("/login", passport.authenticate(
//     "local", // strategy
//     { failureRedirect: "/login", failureFlash: true }), // options
//     (req, res) => {
//         req.flash("success", "Welcome to Wanderlust!");
//         res.redirect("/listings");
//     });


router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            return res.render("users/login", {
                loginError: info.message, // send the error message
                // send back the username and password to the form so that user doesn't have to re-enter them.
                username: req.body.username,
                password: req.body.password
            });
        }
        req.logIn(user, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    })(req, res, next);
});

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "Logged out successful!");
        res.redirect("/listings");
    });
});

module.exports = router;