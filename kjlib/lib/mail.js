/*
 * @Author: 柯军
 * @Date: 2019-01-30 15:28:50
 * @Description:
 */
const nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
const SysConfig = require('../../SysConfig');

let config = {
  email: SysConfig.email
};

smtpTransport = nodemailer.createTransport(smtpTransport({
  service: config.email.service,
  auth: {
    user: config.email.user,
    pass: config.email.password
  }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
let sendMail = function(recipient, subject, html, callback) {

  return smtpTransport.sendMail({

    from: config.email.user,
    to: recipient,
    subject: subject,
    html: html

  }, function(error, response) {
    callback(error, response);
  });
};
// kjlib.sendMail(["arthaskj@163.com","kj18326661192@hotmail.com"],"收款码","这是测试邮件");
module.exports = sendMail;