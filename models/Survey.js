/*
 * @Author: your name
 * @Date: 2020-12-23 11:04:01
 * @LastEditTime: 2020-12-23 11:27:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/models/Survey.js
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema =require('./Recipient')

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 
  'User' },
  dateSent: Date,
  lastResponded: Date
});

// new collection called users
mongoose.model('surveys', surveySchema);