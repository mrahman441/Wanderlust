const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comments: {
        type: String,
    },
    ratings: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now, // sets the default value to the current date and time
    }
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;