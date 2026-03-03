const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings });
}

module.exports.renderNewForm = (req, res) => { // only logged in users can create listing
    console.log(req.user);
    res.render("./listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id).populate({ path: 'reviews', populate: { path: 'author' } }).populate('owner');

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    res.render("./listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {
    const url = req.file ? req.file.path : null; // get the image URL from Cloudinary
    const filename = req.file ? req.file.filename : null; // get the image filename from Cloudinary
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; // set the owner of the listing to the currently logged in user
    if (url && filename) {
        newListing.image = { url, filename };
    }
    await newListing.save();
    req.flash("success", "Listing created successfully!");
    res.redirect('/listings');
};

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    listing.image.url = listing.image.url.replace(/\/upload\//, '/upload/w_100/'); // reduce img size for preview
    res.render("./listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, req.body.listing);

    const url = req.file ? req.file.path : null;
    const filename = req.file ? req.file.filename : null;
    if (url && filename) {
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect('/listings');
}