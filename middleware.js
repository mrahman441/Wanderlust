const Listing = require("./models/listing");
const Review = require("./models/review");

// checking is a user is logged in or not
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // store the url they are requesting. so that after they login, we can redirect them back to that url.
        req.session.returnTo = req.originalUrl;

        req.flash("error", "You must be signed in to create a listing!");
        return res.redirect("/auth/login");
    }
    next();
}

// but passport reset the session after login, so we need to store the url in a separate variable and then redirect to that url after login.
module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}