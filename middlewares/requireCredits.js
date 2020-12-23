/*
 * @Author: your name
 * @Date: 2020-12-23 11:33:19
 * @LastEditTime: 2020-12-23 11:34:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/middlewares/requireCredits.js
 */
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(401).send({ error: 'Not enough credits!' });
  }

  next();
};