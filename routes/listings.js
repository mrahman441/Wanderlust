const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const wrapAsync = require('../utils/wrapAsync.js');
const { validateListing } = require('../utils/validate.js');
const { isLoggedIn } = require('../middleware.js');

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
router.get('/new', isLoggedIn, (req, res) => { // only logged in users can create listing
    console.log(req.user);
    res.render("./listings/new.ejs");
});

/// create listing
// validated using joi schema
router.post('/', upload.single('image'), isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    if (req.file) { newListing.image = '/uploads/' + req.file.filename; }
    await newListing.save();
    req.flash("success", "Listing created successfully!");
    res.redirect('/listings');
}));

/// Edit listing
router.get('/:id/edit', isLoggedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    res.render("./listings/edit.ejs", { listing });
}));

/// Update listing
router.put('/:id', upload.single('image'), isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updateData = { ...req.body.listing };
    if (req.file) {
        updateData.image = '/uploads/' + req.file.filename;
    }
    await Listing.findByIdAndUpdate(id, updateData);
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}));

/// Delete listing
router.delete('/:id', isLoggedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect('/listings');
}));

/// Show listing details
router.get('/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id).populate('reviews');

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    res.render("./listings/show.ejs", { listing });
}));

module.exports = router;