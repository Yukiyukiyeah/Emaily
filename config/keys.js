/*
 * @Author: your name
 * @Date: 2020-12-20 13:19:06
 * @LastEditTime: 2020-12-20 23:08:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/config/keys.js
 */
// keys.js -figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod')
} else {
  // we are in development -return the dev keys!
  module.exports = require('./dev');
}
