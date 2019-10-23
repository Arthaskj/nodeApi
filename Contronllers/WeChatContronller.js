const BaseContronller = require("../kjlib/BaseContronller");
const WeChatSvc = require("../Services/WeChatSvc");

module.exports = class WeChatContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new WeChatSvc();
  }

  // 微信小程序验证
  GetWeApi(params) {
    return this.svc.GetWeApi(params);
  }

  CheckWeChatServer(params) {
    return this.svc.CheckWeChatServer(params);
  }

}