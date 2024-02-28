const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode).send({message:err.message, stackTrace:err.stack})
    // res.status(statusCode).send("Something broke");
}

module.exports =  errorHandler;