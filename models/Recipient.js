/*
 * @Author: your name
 * @Date: 2020-12-23 11:22:23
 * @LastEditTime: 2020-12-23 11:25:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/models/Recipients.js
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// new collection called users
module.exports = recipientSchema;