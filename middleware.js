// checking is a user is logged in or not
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You must be signed in to create a listing!");
        return res.redirect("/auth/login");
    }
    next();
}