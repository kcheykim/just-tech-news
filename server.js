const express = require('express');
const sequelize = require('./config/connection');

const path = require('path');
const exphbs = require('express-handlebars');

const routes = require('./controllers/'); //changing routes to controller

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize }) //save session into database
};

app.use(session(sess)); //session middleware



app.use(express.json()); //middlewares
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'))); //express -  middleware
app.engine('handlebars', hbs.engine); //using handlebars
app.set('view engine', 'handlebars');
app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});