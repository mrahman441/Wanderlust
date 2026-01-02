const errorHandler = (err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    // res.status(status).send(message);
    res.status(status).render("error.ejs", { status, message });
};

module.exports = errorHandler;