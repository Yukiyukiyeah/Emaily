/*
 * @Author: your name
 * @Date: 2020-12-20 16:27:49
 * @LastEditTime: 2020-12-21 18:10:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/services/passport.js
 */
const passport = require('passport');
// const  GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// user: what we have just pulled out of the databse
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// GoogleStrategy
// passport.use(new GoogleStrategy({
//   clientID: keys.googleClientID,
//   clientSecret: keys.googleClientSecret,
//   callbackURL: '/auth/google/callback'
//   }, 
//   accessToken => {
//     console.log(accessToken);
//   })
// );

// GitHubStrategy
passport.use(
  new GitHubStrategy(
    {
    clientID: keys.githubClientID,
    clientSecret: keys.githubClientSecret,
    callbackURL: '/auth/github/callback',
    proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ githubId: profile.id });
      if (existingUser) {
        // we already have a record with the given profile ID
        return done(null, existingUser);
      } 
      // we don't have a user record with this ID
      const user = await new User({ githubId: profile.id }).save()
      done(null, user);      
    }
  )
);


