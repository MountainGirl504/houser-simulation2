module.exports = {
    createUser: function (req, res, next) {             //aka register from front-end
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.createUser([username, password])
            .then((response) => res.status(200).send(response))
            .catch((err) => console.log(err));
    },

    login: function (req, res, next) {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const {session} = req;

        db.login_user([username, password])
        .then((response) => {               //the response comes back as an array of objects
            if (response.length) {          //aka if response contains an object, as opposed to empty array
                session.user.username = username;
                res.status(200).send({success: "You are now logged in!"})
            } else {
                res.status(200).send({error: "Log-in is invalid!"})
            }
        })
        .catch((err) => res.status(500).send({error: "Something went wrong"}))
    }
}