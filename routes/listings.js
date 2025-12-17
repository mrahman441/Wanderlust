const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');
const multer = require('multer');
const path = require('path');

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
router.post('/', upload.single('image'), async (req, res) => {
    const newListing = new Listing(req.body.listing);
    if (req.file) {
        newListing.image = '/uploads/' + req.file.filename;
    }
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
router.put('/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const updateData = { ...req.body.listing };
    if (req.file) {
        updateData.image = '/uploads/' + req.file.filename;
    }
    await Listing.findByIdAndUpdate(id, updateData);
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