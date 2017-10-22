module.exports = function (req, res, next) {
    const {session} =req;
    if (!session.user) { //if user = false then send status 403
        session.user = { username : ''}
        next();
    }
}