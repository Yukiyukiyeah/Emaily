/*
 * @Author: your name
 * @Date: 2020-12-20 16:27:49
 * @LastEditTime: 2020-12-20 21:19:11
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
    callbackURL: '/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ githubId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser);
          } else {
            // we don't have a user record with this ID
            new User({ githubId: profile.id }).save()
              .then(user => done(null, user));
          }
        }); // a Promise      
    }
  )
);


