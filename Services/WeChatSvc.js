const BaseSvc = require("../kjlib/BaseSvc")
const crypto = require('crypto');
const WeChat = require('../kjlib/WeChat')
const config = require('../SysConfig')
const {token} = config.wechat;

module.exports = class WeChatSvc extends BaseSvc {

  constructor(props) {
    super(props);
  }

  /**
   * @createtime 2019/08/26 19:46:58
   * @author 柯军 <arthaskj@163.com>
   * @desc 微信小程序验证
   */
  async GetWeApi(params) {
    let {code} = params,
      {appId, secret, grant_type} = config.wechatP;
    return await this.HTTPRequest(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=${grant_type}`, (error, response, body) => {
      return body
    });
  }

  /**
   * 开发者通过检验signature对请求进行校验（下面有校验方式）。
   * 若确认此次GET请求来自微信服务器，请原样返回echostr参数内容，则接入生效，成为开发者成功，否则接入失败。加密/校验流程如下：
   * 1）将token、timestamp、nonce三个参数进行字典序排序
   * 2）将三个参数字符串拼接成一个字符串进行sha1加密
   * 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
   */
  CheckWeChatServer(params) {
    // 1.获取微信服务器Get请求的参数 signature、timestamp、nonce、echostr
    let {signature, timestamp, nonce, echostr} = params;

    // 2.将token、timestamp、nonce三个参数进行字典序排序
    let array = [token, timestamp, nonce];
    array.sort();

    // 3.将三个参数字符串拼接成一个字符串进行sha1加密
    let tempStr = array.join('');
    const hashCode = crypto.createHash('sha1'); // 创建加密类型
    let resultCode = hashCode.update(tempStr, 'utf8').digest('hex'); // 对传入的字符串进行加密

    // let wx = new WeChat();
    // let err = wx.GetAccessToken();

    // 4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if (resultCode === signature) {
      return echostr;
    } else {
      return 'mismatch'
    }
  }
};