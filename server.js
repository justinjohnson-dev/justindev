const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

/* 
    Deploying to heroku:    heroku git:remote -a advanced-web-app-dev
                            heroku addons:create mongolab:sandbox
                            git push heroku master
*/

require('dotenv').config();
// import routes
const authenticationRoutes = require('./routes/authentication');
const userRoutes = require('./routes/user');

// app
const app = express();
var path = require("path");

// Server being ran on port 5000
const PORT = process.env.PORT || 5000;

// db connection - adding env for creating database in heroku
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/users', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authenticationRoutes);
app.use("/api", userRoutes);

// This is for our HEROKU deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // This is relative path
    });
}

app.listen(PORT, () => `Server running on port ${PORT}`);