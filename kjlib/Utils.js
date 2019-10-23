/*
 * @Author: Ke Jun
 * @Date: 2018-12-21 13:49:35
 * @LastEditTime: 2019-08-20 20:09:02
 * @Description:
 */

const MySqlConnect = require('./lib/mysql');
const SendMail = require('./lib/mail');

module.exports = class Utils {
  constructor() {
    // 数据库查询
    this.DataBase = new MySqlConnect();

    // 发送邮件
    this.SendMail = SendMail;

  }

  /**
   * @createtime 2019/08/20 17:34:56
   * @author 柯军 <arthaskj@163.com>
   * @param {string} err 错误信息
   * @param {any} result 返回的查询数据
   * @desc 返回数据的标准结构
   */
  FormatCallData(err, result, message) {
    return {
      isSuccess: !err,
      message: err || message,
      data: err ? null : result
    };
  }
}