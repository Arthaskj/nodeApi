/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:43:46
 * @Description: 系统接口实现
 */
const BaseSvc = require("../kjlib/BaseSvc")

module.exports = class SysSvc extends BaseSvc {

  constructor(props) {
    super(props);
  }

  /**
   * @createtime 2019/08/20 17:25:18
   * @author 柯军 <arthaskj@163.com>
   * @param {object} params 前台传过来的参数
   * @desc 添加用户
   */
  AddUser(params) {
    let { name, icon, key, phone} = params;

    let SQL = `INSERT 
                INTO Account(UserName,RoleLevel,UserIcon,UserKey,UserPhone,UserPwd) 
                VALUES('${name}','0','${icon}','${key}',${phone},'123456')`;

    let { data } = this.CheckUserByKey(params);

    if (data && data.length) {
      return this._Context.FormatCallData(true, null, '已存在相同用户');
    }

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/20 19:22:17
   * @author 柯军 <arthaskj@163.com>
   * @desc 通过用户Key值检查用户是否存在
   */
  CheckUserByKey(params) {
    let { key } = params;

    let SQL = `SELECT UserName 
                FROM Account 
                WHERE UserKey = '${key}'`;

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/26 18:32:17
   * @author 柯军 <arthaskj@163.com>
   * @param {string}
   * @desc 通过用户Email\Phone值检查用户是否存在
   */
  CheckUserByEmailOrPhone(params) {
    let { mail, phone } = params;

    let SQL = `SELECT UserID 
                FROM Account 
                WHERE UserEmail = '${mail}' OR UserPhone = '${phone}' `;

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/20 19:28:25
   * @author 柯军 <arthaskj@163.com>
   * @param {string} name 用户名称
   * @param {string} icon 用户头像，路径地址
   * @param {string} phone 用户手机号
   * @desc 更新用户信息
   */
  UpdateUser(params) {
    let { name, icon, phone } = params;

    let SQL = `UPDATE Account 
                SET UserName = '${name}',UserIcon = '${icon}' 
                WHERE UserPhone = '${phone}'`;

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/21 08:28:22
   * @author 柯军 <arthaskj@163.com>
   * @desc 用户注册
   */
  SignIn(params) {
    let checkData = this.CheckUserByEmailOrPhone(params);
    if (checkData && checkData.length) {
      return this.FormatCallData(true, null, "用户已存在!请更换邮箱或手机号码重试!");
    }

    let { name, password, key, mail, phone } = params;

    let SQL = `INSERT 
                INTO Account(UserName,RoleLevel,UserPwd,UserKey,UserEmail,UserPhone) 
                VALUES('${name}','10','${password}','${key}','${mail}','${phone}')`;
    let successData = this._Context.DataBase.PROJ(SQL);
    return this.FormatCallData(false, successData, "用户注册成功!");
  }

  /**
   * @createtime 2019/08/26 19:21:31
   * @author 柯军 <arthaskj@163.com>
   * @param {string} phone 用户手机号
   * @param {string} password 用户密码
   * @desc 用户登录
   */
  LogIn(params) {
    let { phone, password } = params;
    let SQL = `SELECT * 
            FROM Account 
            WHERE UserPhone = '${phone}' AND UserPwd = '${password}' `;

    let UserData = this._Context.DataBase.PROJ(SQL);
    if (UserData && UserData.length) {
      return UserData;
    } else {
      return false;
    }
  }

  /**
   * @createtime 2019/08/26 19:27:46
   * @author 柯军 <arthaskj@163.com>
   * @param {string} phone 用户手机号
   * @param {string} password 用户新密码
   * @desc 密码重置
   */
  ResetPwd(params) {
    let checkData = this.CheckUserByEmailOrPhone(params);
    if (checkData && !checkData.length) {
      return this.FormatCallData(true, null, "当前用户不存在!");
    }

    let {password, phone} = params;
    let SQL = `UPDATE Account 
                SET UserPwd = '${password}' 
                WHERE UserPhone = '${phone}'`;

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/26 19:33:44
   * @author 柯军 <arthaskj@163.com>
   * @param {string} phone 用户手机号
   * @desc 获取用户等级
   */
  GetUserLevel(params) {
    let {phone} = params;
    let SQL = `SELECT RoleLevel 
            FROM Account 
            WHERE UserPhone = '${phone}'`;
    let _data = this._Context.DataBase.PROJ(SQL);
    return _data;
  }

  /**
   * @createtime 2019/08/26 19:40:03
   * @author 柯军 <arthaskj@163.com>
   * @param {string} phone 用户手机号
   * @param {string} level 用户新等级
   * @desc 设置用户等级
   */
  SetUserLevel(params) {
    let {level, phone} = params;
    let SQL = `UPDATE Account 
                SET RoleLevel = '${level}' 
                WHERE UserPhone = '${phone}'`;
    let _data = this._Context.DataBase.PROJ(SQL);
    return _data;
  }

  /**
   * @createtime 2019/08/26 19:37:04
   * @author 柯军 <arthaskj@163.com>
   * @param {string} phone 用户手机号
   * @desc 获取用户详细信息
   */
  GetUserInfo(params) {
    let {phone} = params;
    let SQL = `SELECT UserID,UserName,RoleLevel,UserIcon,UserKey 
                FROM Account 
                WHERE UserPhone = ${phone}`
    let _data = this._Context.DataBase.PROJ(SQL);
    return _data;
  }

  /**
   * @createtime 2019/10/21 10:04:27
   * @author 柯军 <arthaskj@163.com>
   * @param {string}
   * @desc 添加留言
   */
  AddMessage(params) {
    let {message, createUser, createTime, headIcon} = params;
    let SQL = `INSERT 
                INTO Comment(Content,CreateUser,CreateTime,ImageUrl) 
                VALUES('${message}','${createUser}','${createTime}','${headIcon}')`
    let successData = this._Context.DataBase.PROJ(SQL);
    return this.FormatCallData(false, successData, "留言添加成功!");
  }

  /**
   * @createtime 2019/10/21 10:24:00
   * @author 柯军 <arthaskj@163.com>
   * @param {string}
   * @desc 获取留言
   */
  GetMessages(params) {
    let {phone} = params;
    let SQL = `SELECT IID,Content,CreateUser,CreateTime,ImageUrl 
                FROM Comment 
                ORDER BY CreateTime DESC`
    let _data = this._Context.DataBase.PROJ(SQL);
    return _data;
  }

  /**
   * @createtime 2019/10/21 11:01:01
   * @author 柯军 <arthaskj@163.com>
   * @param {string}
   * @desc 删除留言
   */
  DeleteMessages(params) {
    let {id} = params;
    let SQL = `DELETE 
                FROM Comment 
                WHERE IID = '${id}'`;
    let _data = this._Context.DataBase.PROJ(SQL);
    return _data;
  }

};