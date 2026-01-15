const ExpressError = require('./ExpressError.js');
const { listingSchema, reviewSchema } = require('../schema.js');

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    }
    next();
}

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    }
    next();
}

module.exports = { validateListing, validateReview };