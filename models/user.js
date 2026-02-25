const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose').default

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
});

// passportLocalMongoose will add username and password to the schema. we don't need to do it manually.
userSchema.plugin(passportLocalMongoose); // it will add username and password to the schema.

module.exports = mongoose.model("User", userSchema);