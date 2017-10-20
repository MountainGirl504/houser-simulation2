module.exports = {
    createUser: function (req, res, next) {
        const db = req.app.get('db');
        const { username, password } = req.body;
        console.log(username, password);

        db.createUser([username, password])
            .then((response) => res.status(200).send(response))
            .catch((err) => console.log(err));
    }
}