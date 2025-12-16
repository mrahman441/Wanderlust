const mongoose = require("mongoose");
const imgLink = "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        // setting default img if user don't provide any img
        set: (v) => v === "" ? imgLink : v, // this is for form perspective
        default: imgLink, // this for normal hard coded data push
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;