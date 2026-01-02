const ExpressError = require('./ExpressError.js');
const { listingSchema } = require('../schema.js');

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    }
    next();
}
module.exports = validateListing;