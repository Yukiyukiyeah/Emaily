/*
 * @Author: your name
 * @Date: 2020-12-20 18:29:02
 * @LastEditTime: 2020-12-20 19:28:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/models/User.js
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema;

const userSchema = new Schema({
  githubId: String
});

// new collection called users
mongoose.model('users', userSchema);