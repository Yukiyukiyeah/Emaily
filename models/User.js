/*
 * @Author: your name
 * @Date: 2020-12-20 18:29:02
 * @LastEditTime: 2020-12-22 01:10:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/models/User.js
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema;

const userSchema = new Schema({
  githubId: String,
  credits: { type: Number, default: 0 }
});

// new collection called users
mongoose.model('users', userSchema);