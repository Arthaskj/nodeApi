/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:42:49
 * @Description: 系统接口控制器
 */

const BaseContronller = require("../kjlib/BaseContronller");
const SysSvc = require("../Services/SysSvc");

module.exports = class SysContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new SysSvc;
  }

  // 添加用户
  AddUser(params) {
    return this.svc.AddUser(params);
  }

  // 通过用户Key值检查用户是否存在
  CheckUserByKey(params) {
    return this.svc.CheckUserByKey(params);
  }

  // 通过用户Email\Phone值检查用户是否存在
  CheckUserByEmailOrPhone(params) {
    return this.svc.CheckUserByEmailOrPhone(params);
  }

  // 更新用户信息
  UpdateUser(params) {
    return this.svc.UpdateUser(params);
  }

  // 用户注册
  SignIn(params) {
    return this.svc.SignIn(params);
  }

  // 用户登录
  LogIn(params) {
    return this.svc.LogIn(params);
  }

  // 密码重置
  ResetPwd(params) {
    return this.svc.ResetPwd(params);
  }

  // 获取用户等级
  GetUserLevel(params) {
    return this.svc.GetUserLevel(params);
  }

  // 设置用户等级
  SetUserLevel(params) {
    return this.svc.SetUserLevel(params);
  }

  // 获取用户详细信息
  GetUserInfo(params) {
    return this.svc.GetUserInfo(params);
  }

  AddMessage(params) {
    return this.svc.AddMessage(params);
  }

  GetMessages(params) {
    return this.svc.GetMessages(params);
  }

  DeleteMessages(params) {
    return this.svc.DeleteMessages(params);
  }

}