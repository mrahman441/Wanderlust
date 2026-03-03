const express = require('express');
const router = express.Router();

const wrapAsync = require('../utils/wrapAsync.js');
const { validateListing } = require('../utils/validate.js');
const { isLoggedIn, isOwner } = require('../middleware.js');

const { storage } = require('../cloudConfig.js');
const multer = require('multer')
const upload = multer({ storage });

// import controllers
const listings = require('../controllers/listings.js');

router.route('/')
    .get(wrapAsync(listings.index)) // show all listings
    .post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync(listings.createListing)); // create listing

router.get('/new', isLoggedIn, listings.renderNewForm);  // new listing form

router.route('/:id')
    .get(wrapAsync(listings.showListing)) // Show listing details
    .put(isLoggedIn, isOwner, validateListing, upload.single('listing[image]'), wrapAsync(listings.updateListing)) // Update listing
    .delete(isLoggedIn, isOwner, wrapAsync(listings.deleteListing)); // Delete listing

router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listings.renderEditForm)); // Edit listing

module.exports = router;