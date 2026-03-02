const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const wrapAsync = require('../utils/wrapAsync.js');
const { validateListing } = require('../utils/validate.js');
const { isLoggedIn, isOwner } = require('../middleware.js');

// import controllers
const listings = require('../controllers/listings.js');

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

router.route('/')
    .get(wrapAsync(listings.index)) // show all listings
    .post(upload.single('image'), isLoggedIn, validateListing, wrapAsync(listings.createListing)); // create listing

router.get('/new', isLoggedIn, listings.renderNewForm);  // new listing form

router.route('/:id')
    .get(wrapAsync(listings.showListing)) // Show listing details
    .put(isLoggedIn, isOwner, upload.single('image'), isLoggedIn, validateListing, wrapAsync(listings.updateListing)) // Update listing
    .delete(isLoggedIn, isOwner, wrapAsync(listings.deleteListing)); // Delete listing

router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listings.renderEditForm)); // Edit listing

module.exports = router;