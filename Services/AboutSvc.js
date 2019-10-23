/*
 * @Author: Ke Jun
 * @Date: 2018-12-21 09:00:36
 * @LastEditTime: 2019-08-20 19:51:20
 * @Description:
 */
const BaseSvc = require("../kjlib/BaseSvc")
// const myRedis = require('../kjlib/MyRedis')
// const util = require('util')

module.exports = class AboutSvc extends BaseSvc {

  constructor(props) {
    super(props);
  }

  /**
   * @createtime 2019/08/20 17:25:18
   * @author 柯军 <arthaskj@163.com>
   * @param {object} params 前台传过来的参数
   * @desc 测试接口
   */
  GetContent(params) {
    // let {key = "test", value = 'undefined'} = params;
    // console.log(key, value);
    // new myRedis().setString(key, value, function(err, res) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(util.inspect(res));
    //   }
    // });

    let SQL = `SELECT * 
                FROM Story`;
    return this._Context.DataBase.PYSP(SQL);
    // return this.QueryDataFromDB(SQL, this._Context.DataBase.PYSP);
  }
};