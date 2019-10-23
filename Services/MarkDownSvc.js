/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:43:46
 * @Description: MarkDown接口具体实现
 */
const BaseSvc = require("../kjlib/BaseSvc")

module.exports = class MarkDownSvc extends BaseSvc {

  constructor(props) {
    super(props);
  }

  /**
   * @createtime 2019/08/20 18:28:30
   * @author 柯军 <arthaskj@163.com>
   * @param {string} userName 用户识别标记
   * @desc 获取所有MarkDown数据
   */
  GetAllMarkDown(params) {
    let { userName } = params;

    let SQL = `SELECT * 
                  FROM Mark WHERE CreateUser = '${userName}'`;

    return this._Context.DataBase.PROJ(SQL);
  }
};