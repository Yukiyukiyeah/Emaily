/*
 * @Author: your name
 * @Date: 2020-12-26 18:29:52
 * @LastEditTime: 2020-12-26 21:23:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/services/emailTemplates/surveyTemplate.js
 */
const keys = require('../../config/keys');
module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align:center;">
          <h3>I'd lke your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};