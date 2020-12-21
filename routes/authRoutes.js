/*
 * @Author: your name
 * @Date: 2020-12-20 16:27:01
 * @LastEditTime: 2020-12-21 22:36:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/routes/authRoutes.js
 */
// the origin passport.js
const passport = require('passport');

module.exports = app => {
  //  google OAuth
  // app.get(
  //   '/auth/google', 
  //   passport.authenticate('google', {
  //     scope: ['profile', 'email']
  //   })
  // );

  // app.get('/auth/google/callback', passport.authenticate('google'));

  // github OAuth
  app.get(
    '/auth/github', 
    passport.authenticate('github', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/github/callback', 
    passport.authenticate('github'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
