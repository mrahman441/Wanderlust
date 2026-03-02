const express = require('express');
const router = express.Router({ mergeParams: true }); // mergeParams to access :id from parent route
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview } = require('../utils/validate.js');
const { isLoggedIn, isReviewAuthor } = require('../middleware.js');

// import controllers
const reviews = require('../controllers/reviews.js');

router.post('/', isLoggedIn, validateReview, wrapAsync(reviews.createReview)); // add review
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviews.deleteReview)); // delete review

module.exports = router;