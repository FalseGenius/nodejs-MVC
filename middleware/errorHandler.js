const {constants} = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            const body = {title: "Validation failed", message:err.message, stackTrace:err.stack}
            res.status(statusCode).send(body);
        case constants.NOT_FOUND:
            const notFound = {title: "Not found", message:err.message, stackTrace:err.stack}
            res.status(statusCode).send(notFound);
        case constants.UNAUTHORIZED:
            const Unauthorized = {title: "Unauthorized", message:err.message, stackTrace:err.stack}
            res.status(statusCode).send(Unauthorized);
        case constants.FORBIDDEN:
            const forbidden = {title: "Forbidden", message:err.message, stackTrace:err.stack}
            res.status(statusCode).send(forbidden);
        default:
            break;
    }   

}

module.exports =  errorHandler;