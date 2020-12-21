/*
 * @Author: your name
 * @Date: 2020-12-21 01:58:10
 * @LastEditTime: 2020-12-21 13:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/setupProxy.js
 */
const { createProxyMiddleware }  = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    ["/api", "/auth/github"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};