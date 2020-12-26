/*
 * @Author: your name
 * @Date: 2020-12-26 17:41:58
 * @LastEditTime: 2020-12-26 20:34:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/services/Mailer.js
 */
const REGION = 'us-east-2'
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: REGION});
AWS.config.apiVersions = {
  ses: '2010-12-01',
  // other service API versions
};

class Mailer {
  constructor({ subject, recipients }, content) {
    this.from_email = 'yukitang0703@gmail.com';
    this.subject = subject;
    this.body = content;
    this.recipients = this.formatAddresses(recipients);
  }
  formatAddresses(recipients) {
    return recipients.map(({ email }) => email);
  }
  send() {
    const params = {
      Destination: { /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: this.recipients,
          /* more items */
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
           Charset: "UTF-8",
           Data: this.body
          },
          Text: {
           Charset: "UTF-8",
           Data: "Test test test"
          }
         },
         Subject: {
          Charset: 'UTF-8',
          Data: this.subject
         }
        },
      Source: this.from_email, /* required */
      ReplyToAddresses: [
         this.from_email,
        /* more items */
      ],
    };
    try {
      var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

      // Handle promise's fulfilled/rejected states
      sendPromise.then(
        function(data) {
          console.log(data.MessageId);
        }).catch(
          function(err) {
          console.error(err, err.stack);
        });
    } catch(err) {
      console.log(err, err.stack);
    }
    
  }
}
module.exports = Mailer;
