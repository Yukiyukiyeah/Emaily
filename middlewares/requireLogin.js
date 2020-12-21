/*
 * @Author: your name
 * @Date: 2020-12-22 01:22:14
 * @LastEditTime: 2020-12-22 01:23:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/middlewares/requireLogn.js
 */
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};