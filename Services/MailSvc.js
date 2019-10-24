/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:43:46
 * @Description: 邮件发送实现
 */
const BaseSvc = require("../kjlib/BaseSvc")

module.exports = class MailSvc extends BaseSvc {

  constructor(props) {
    super(props);
  }

  /**
   * @createtime 2019/08/20 18:15:41
   * @author 柯军 <arthaskj@163.com>
   * @param {array} address 发送的地址
   * @param {string} subject 发送的主题
   * @param {string} html 发送的html内容
   * @desc 发送邮件，常用于验证码邮件发送
   * $.ajax({
      url:'http://localhost:3000/api/MailContronller/SendMail',
      data:{
        address: ['arthaskj@163.com'],
        subject: "K记",
        html: "【K记】您的验证码是<h1 style='margin:0 10px;display:inline-block;color:#1f90e6'>11111</h1>，用于密码更改，1分钟内有效。验证码提供给他人可能导致账号被盗，请勿泄露，谨防被骗。",
      },
      success(res){
        console.log(res)
      }
    })
   */
  SendMail(params) {
    let { address, subject, html } = params;
    this._Context.SendMail(address, subject, html, (err) => {
      if (err) {
        return this._Context.FormatCallData(err.toString(), '发送成功');
        // this.response.status(400);
        // this.response.send(this._Context.FormatCallData(err.toString(), '发送成功'));
      }
      // this.response.status(200);
      // response.json(result);
      return this._Context.FormatCallData(null, '发送成功')
      // this.response.send(this._Context.FormatCallData(null, '发送成功'));
    });
  }
}