const Joi = require('joi');

// Schema for validating listing data
// We validate that all required fields are present and of the correct type
const listingSchema = Joi.object({
    listing: Joi.object({ // listing object validation
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0),
        location: Joi.string().required(),
        country: Joi.string().required(),
        image: Joi.string().optional(),
    }).required(),
});

const reviewSchema = Joi.object({
    review: Joi.object({
        comments: Joi.string().required(),
        ratings: Joi.number().required().min(1).max(5),
    }).required(),
});

module.exports = { listingSchema, reviewSchema };