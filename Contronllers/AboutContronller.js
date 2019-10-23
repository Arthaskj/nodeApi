/*
 * @Author: 柯军
 * @Date: 2019-08-20 08:41:38
 * @Description:
 */

const BaseContronller = require("../kjlib/BaseContronller");
const AboutSvc = require("../Services/AboutSvc");

module.exports = class AboutContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new AboutSvc();
  }

  // 测试接口
  GetContent(params) {
    return this.svc.GetContent(params);
  }

}