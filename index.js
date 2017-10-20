const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , listingsControllers = require('./controllers/listingsControllers')
    , usersControllers = require('./controllers/usersControllers')
    , session = require('express-session')
    , checkForSession = require('./middlewares/checkForSession');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'foo',
    resave: false,
    saveUninitialized: false
}));
app.use(checkForSession);

const PORT = 7070;

massive(process.env.CONNECTION_STRING).then((db) => {
    console.log("DB connected")
    app.set('db', db);
})

app.get('/api/listings', listingsControllers.getAll);
app.get('/api/listings/:val', listingsControllers.filter );
app.delete('/api/listings/:id', listingsControllers.delete);
app.post('/api/listings', listingsControllers.create );

app.post('/api/users', usersControllers.createUser );

app.listen(PORT, () => { console.log(`Server is listening on port: ${PORT}.`); });