module.exports = {
    getAll: function (req, res, next) {
        const db = req.app.get('db');

        db.getAll()
            .then(list => res.status(200).send(list))
            .catch((err) => res.status(500).send(err));
    },
    filter: function (req, res, next) {
        const db = req.app.get('db');
        const { params } = req;

        db.filter([params.val])
            .then(response => res.status(200).send(response))
            .catch(err => res.status(500).send(err))
    },
    delete: function (req, res, next) {
        const db = req.app.get('db');
        const { params } = req;
        console.log(params.id);

        db.delete([params.id])
            .then(() => res.status(200).send('Delete successful!'))
            .catch((err) => res.status(500).send(err));
    },
    create: function (req, res, next) {
        const db = req.app.get('db');
        const { property_name
            , property_description
            , address
            , city
            , state
            , zip
            , img_url
            , loan_amount
            , monthly_mortgage
            , desired_rent } = req.body;

        db.create([property_name
            , property_description
            , address
            , city
            , state
            , zip
            , img_url
            , loan_amount
            , monthly_mortgage
            , desired_rent])
            .then((response) => res.status(200).send(response))
            .catch((err) => res.status(500).send(err));
    }
}