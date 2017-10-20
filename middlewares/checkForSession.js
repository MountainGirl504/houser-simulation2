module.exports = function (req, res, next) {
    if (!req.session.user) { //if user = false then send status 403
        res.status(403).send('Please Login')
    }
    next();
}