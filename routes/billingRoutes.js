/*
 * @Author: your name
 * @Date: 2020-12-22 00:21:37
 * @LastEditTime: 2020-12-22 01:25:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/routes/billiingRoutes.js
 */
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
  const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description:' $5 for 5 credits',
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};