/*
 * @Author: Yuki
 * @Date: 2020-12-18 21:16:31
 * @LastEditTime: 2020-12-20 21:23:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/index.js
 */

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days
    keys: [keys.cookieKey]
  })
);
// tell passport to use cookie for authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Dynamically tells us which port to listen to (Heroku injected to Environmental variable)
const PORT = process.env.PORT || 5000 // environment variable
app.listen(PORT);