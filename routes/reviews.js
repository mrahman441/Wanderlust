const express = require('express');
const router = express.Router({ mergeParams: true }); // mergeParams to access :id from parent route
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview } = require('../utils/validate.js');

// import models
const Listing = require('../models/listing.js');
const Review = require('../models/review.js');

const { isLoggedIn, isReviewAuthor } = require('../middleware.js');

/// add review
router.post('/', isLoggedIn, validateReview, wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id).populate('reviews');
    const review = new Review(req.body.review);
    review.author = req.user._id; // set the author of the review to the currently logged in user
    listing.reviews.push(review);

    await review.save();
    await listing.save(); // Save the listing with the new review

    req.flash("success", "Review added successfully!");
    res.redirect(`/listings/${listing._id}`);
}));

/// delete review
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;