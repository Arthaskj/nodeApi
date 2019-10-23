/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:42:49
 * @Description: MarkDown接口具体实现
 */

const BaseContronller = require("../kjlib/BaseContronller");
const MarkDownSvc = require("../Services/MarkDownSvc");

module.exports = class MarkDownContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new MarkDownSvc();
  }

  // 获取所有MarkDown数据
  GetAllMarkDown(params) {
    return this.svc.GetAllMarkDown(params);
  }

}