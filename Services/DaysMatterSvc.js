/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:43:45
 * @Description: 倒数日接口实现
 */
const BaseSvc = require("../kjlib/BaseSvc")

module.exports = class DaysMatterSvc extends BaseSvc {

  constructor(props) {
    super(props);
  }

  /**
   * @createtime 2019/08/20 17:46:26
   * @author 柯军 <arthaskj@163.com>
   * @param {string} title 事件名称
   * @param {string} desc 描述信息
   * @param {string} targetTime 目标时间
   * @param {string} createTime 创建时间
   * @param {string} userKey 用户标记
   * @param {string} type 类型
   * @desc 添加一条新的倒数日记录
   */
  AddDaysMatter(params) {
    let { title, desc, targetTime, createTime, userKey, type } = params;

    let SQL = `INSERT INTO DaysMatter
                    (Title,Desc,TargetTime,CreateTime,UserKey,Type) 
                  VALUES ('${title}','${desc}','${targetTime}','${createTime}','${userKey}','${type}')`;

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/20 17:58:58
   * @author 柯军 <arthaskj@163.com>
   * @param {string} title 事件名称
   * @param {string} desc 描述信息
   * @param {string} targetTime 目标时间
   * @param {number} id 数据ID
   * @desc 编辑一条新的倒数日记录
   */
  EditDaysMatter(params) {
    let { id, title, desc, targetTime } = params;

    let SQL = `UPDATE DaysMatter 
                  SET Title = '${title}',
                      Desc = '${desc}',
                      TargetTime = '${targetTime}' 
                      WHERE ID = '${id}' `;

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/20 18:04:55
   * @author 柯军 <arthaskj@163.com>
   * @param {string} key 用户识别代码
   * @desc 获取某个用户的所有数据
   */
  GetDaysMatter(params) {
    let { key } = params;

    let SQL = `SELECT * 
                  FROM DaysMatter
                  WHERE UserKey = '${key}' `;

    return this._Context.DataBase.PROJ(SQL);
  }

  /**
   * @createtime 2019/08/20 18:07:31
   * @author 柯军 <arthaskj@163.com>
   * @param {number} id 倒数日数据id
   * @desc 删除某条倒数日数据
   */
  DeleteDaysMatter(params) {
    let { id } = params;

    let SQL = `DELETE FROM DaysMatter 
                  WHERE ID = '${id}' `;

    return this._Context.DataBase.PROJ(SQL);
  }

}