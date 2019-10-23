/*
 * @Author: 柯军
 * @Date: 2019-08-20 10:38:17
 * @Description:
 */
const _Context = require('./Utils')
const HTTPRequest = require('request');

module.exports = class BaseSvc {

  constructor(props) {
    this.request = props && props.request;
    this.response = props && props.response;
    this._Context = new _Context();
    this.HTTPRequest = HTTPRequest;
    this.FormatCallData = this._Context.FormatCallData
  }

  /**
   * @createtime 2019/08/20 18:39:10
   * @author 柯军 <arthaskj@163.com>
   * @param {string} SQL 查询语句
   * @param {object} DataBase 数据库对象
   * @desc 简化普通数据库查询
   */
  async QueryDataFromDB(SQL, DataBase) {
    return await DataBase(SQL);
    // let result = await DataBase(SQL);
    // return this._Context.FormatCallData(result);
  }

}