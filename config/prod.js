/*
 * @Author: your name
 * @Date: 2020-12-20 23:08:11
 * @LastEditTime: 2020-12-21 23:04:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/config/prod.js
 */

const { stripePublishableKey } = require("./dev");

// prod.js - production keys here
module.exports = {
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey:process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};

