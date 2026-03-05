require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const errorHandler = require("./utils/errorHandler.js");
const session = require("express-session");
const connectMongo = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local"); // for authentication

// import model
const User = require("./models/user.js");

// import routes
const listings = require("./routes/listings.js");
const reviews = require("./routes/reviews.js");
const user = require("./routes/user.js");

// Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate); // ejs-mate for layouts

// session configuration for production
const MongoStore = connectMongo.default || connectMongo;
const store = MongoStore.create({
    mongoUrl: process.env.ATLASDB_URL, // db url
    crypto: {
        secret: "riarianaurmisecret",
    },
    touchAfter: 24 * 60 * 60, // time period in seconds to update the session in the database
})
store.on("error", (e) => {
    console.log("Session store error: ", e);
});

// session configuration for development
app.use(session({
    store, // for production
    secret: "riarianaurmisecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // User is model
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});

// api routes
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/auth", user);

app.get("/", (req, res) => {
    res.redirect("/listings");
});

// page not found routes
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// error handling
app.use(errorHandler);

// database connection
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log("connected to mongoose");
}).catch((error) => {
    console.log(error);
})
async function main() {
    await mongoose.connect(dbUrl);
}

app.listen(8080, () => {
    console.log("Server is running on: http://localhost:8080/listings");
})