const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const wrapAsync = require('../utils/wrapAsync.js');
const { validateListing, validateReview } = require('../utils/validate.js');

// import models
const Listing = require('../models/listing.js');
const Review = require('../models/review.js');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed!'));
    }
});

/// show all listings
router.get('/', wrapAsync(async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings });
}));

/// new listing form
router.get('/new', (req, res) => {
    res.render("./listings/new.ejs");
});

/// create listing
// validated using joi schema
router.post('/', upload.single('image'), validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    if (req.file) { newListing.image = '/uploads/' + req.file.filename; }
    await newListing.save();
    res.redirect('/listings');
}));

/// Edit listing
router.get('/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
}));

/// Update listing
router.put('/:id', upload.single('image'), validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updateData = { ...req.body.listing };
    if (req.file) {
        updateData.image = '/uploads/' + req.file.filename;
    }
    await Listing.findByIdAndUpdate(id, updateData);
    res.redirect(`/listings/${id}`);
}));

/// Delete listing
router.delete('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
}));

/// Show listing details
router.get('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id).populate('reviews');
    res.render("./listings/show.ejs", { listing });
}));


/// add review
router.post('/:id/reviews', validateReview, wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id).populate('reviews');
    const review = new Review(req.body.review);
    listing.reviews.push(review);

    await review.save();
    await listing.save(); // Save the listing with the new review

    res.redirect(`/listings/${listing._id}`);
}));

/// delete review
router.delete('/:id/reviews/:reviewId', wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));


module.exports = router;