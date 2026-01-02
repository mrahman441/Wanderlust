// we can add comma's in large numbers for better readability
let number = 10000;
console.log(number.toLocaleString("en-BD")); // Output: 10,000

// we can set default img if user don't provide any img
// see models/listing.js for implementation

// we can send from data as object from forms itself
// see views/Listings/new.ejs for implementation

// ejs mate : it helps us to create layouts for ejs files and avoid repetition
// see app.js and views/layouts/boilerplate.ejs for implementation

// to validate our data before saving to database we can use joi npm package
// to install joi: npm install joi
// see schema.js and utils/validate.js and routes/listings.js for implementation
