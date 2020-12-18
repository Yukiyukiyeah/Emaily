/*
 * @Author: Yuki
 * @Date: 2020-12-18 21:16:31
 * @LastEditTime: 2020-12-18 21:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/index.js
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000 // environment variable
app.listen(PORT);