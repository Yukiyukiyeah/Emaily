/*
 * @Author: Yuki
 * @Date: 2020-12-18 21:16:31
 * @LastEditTime: 2020-12-20 13:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/index.js
 */

const express = require('express');
const passport = require('passport');
const  GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
  }, accessToken => {
    console.log(accessToken);
  })
);

app.get(
  'auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// Dynamically tells us which port to listen to (Heroku injected to Environmental variable)
const PORT = process.env.PORT || 5000 // environment variable
app.listen(PORT);