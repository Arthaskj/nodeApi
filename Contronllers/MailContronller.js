/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:42:49
 * @Description: 邮件发送控制器
 */
const BaseContronller = require("../kjlib/BaseContronller");
const MailSvc = require("../Services/MailSvc");

module.exports = class MailContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new MailSvc({request: this.request, response: this.response});
  }

  // 发送邮件，常用于验证码邮件发送
  SendMail(params) {
    return this.svc.SendMail(params);
  }

}