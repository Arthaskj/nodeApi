const HTTPRequest = require('request');
const config = require('../SysConfig')
const {appId, appSecret} = config.wechat;

module.exports = class WeChat {

  constructor(props) {
    this.appId = appId;
    this.appSecret = appSecret
  }

  /**
   * @createtime 2019/10/16 10:24:29
   * @author 柯军 <arthaskj@163.com>
   * @param {string}
   * @desc 获取AccessToken
   */
  async GetAccessToken() {
    let {appId: appId, appSecret: appSecret} = this,
      url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${AppId}&secret=${AppSecret}`

    return await HTTPRequest(url, (error, response, body) => {
      if (error) {
        throw new Error(error.toString()); // 抛出异常
      } else {
        this.AccessToken = body;
        return body
      }
    });
  }
}