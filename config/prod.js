/*
 * @Author: your name
 * @Date: 2020-12-20 23:08:11
 * @LastEditTime: 2020-12-20 23:19:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/config/prod.js
 */

// prod.js - production keys here
module.exports = {
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey:process.env.COOKIE_KEY
};

