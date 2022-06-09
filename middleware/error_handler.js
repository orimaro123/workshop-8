module.exports = function errorHandler(error, req, res, next) {
    console.log("Received error", error.message);
    let status = error.statusCode || 500;
    res.status(status).json({
        "status": status,
        "error": `${error.message || "Something went wrong"}`
    });
};