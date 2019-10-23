/*
 * @Author: 柯军
 * @Date: 2019-08-20 08:41:38
 * @Description: 倒数日接口控制器
 */
const BaseContronller = require('../kjlib/BaseContronller');
const DaysMatterSvc = require("../Services/DaysMatterSvc");

module.exports = class DaysMatterContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new DaysMatterSvc();
  }

  // 添加一条新的倒数日记录
  AddDaysMatter(params) {
    return this.svc.AddDaysMatter(params);
  }

  // 编辑一条新的倒数日记录
  EditDaysMatter(params) {
    return this.svc.EditDaysMatter(params);
  }

  // 获取某个用户的所有数据
  GetDaysMatter(params) {
    return this.svc.GetDaysMatter(params);
  }

  // 删除某条倒数日数据
  DeleteDaysMatter(params) {
    return this.svc.DeleteDaysMatter(params);
  }
}