const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const errorHandler = require("./utils/errorHandler.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local"); // for authentication
const passportLocalMongoose = require("passport-local-mongoose");

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

app.use(session({
    secret: "riarianaurmiprity",
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
    next();
});

// api routes
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/", user);

// page not found routes
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.get("/", (req, res) => {
    res.send("Hi, I'm root!!")
});

// error handling
app.use(errorHandler);

// database connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
    console.log("connected to mongoose");
}).catch((error) => {
    console.log(error);
})
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.listen(8080, () => {
    console.log("Server is running on: http://localhost:8080");
})