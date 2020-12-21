/*
 * @Author: your name
 * @Date: 2020-12-21 01:58:10
 * @LastEditTime: 2020-12-21 02:00:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/setupProxy.js
 */
const { ceateProxyMiddleware }  = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    ["/api", "/auth/github"],
    createProxyMiddleware({
      target: "https://localhost:5000",
    })
  );
};