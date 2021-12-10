const logger = (req, res, next) => {
    console.log(req.method, req.path);
    console.log(req.body);
    next();
}

module.exports = logger;