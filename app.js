const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// import routes
const listings = require("./routes/listings.js");

// setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate); // ejs-mate for layouts


// api routes
app.use("/listings", listings);



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


app.get("/", (req, res) => {
    res.send("Hi, I'm root!!")
})
app.listen(8080, () => {
    console.log("Server is running on: http://localhost:8080");
})