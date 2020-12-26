/*
 * @Author: your name
 * @Date: 2020-12-20 23:08:11
 * @LastEditTime: 2020-12-26 21:16:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/config/prod.js
 */

// prod.js - production keys here
module.exports = {
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey:process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
};

