const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');


// Route to get all listings
// API: GET /listings
router.get('/', async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings });
});

// Route to create a new listing
// API: GET /listings/new
router.get('/new', (req, res) => {
    res.render("./listings/new.ejs");
});

// Route to handle new listing form submission
// API: POST /listings
router.post('/', async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
});

// Edit listing
// API: GET /listings/:id/edit
router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
});

// Update listing
// API: PUT /listings/:id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }); // spread operator to send data as object
    res.redirect(`/listings/${id}`);
});

// Delete listing
// API: DELETE /listings/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
});

// Route to get a specific listing by ID
// API: GET /listings/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("./listings/show.ejs", { listing });
});

module.exports = router;