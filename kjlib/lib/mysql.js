/*
 * @Author: Ke Jun
 * @Date: 2018-12-21 11:29:15
 * @LastEditTime: 2019-08-21 08:23:41
 * @Description: 数据库连接配置
 */

const mysql = require('mysql');
const SysConfig = require('../../SysConfig');

// 数据库配置文件
const mysqlConfig = {
  pysp: SysConfig.mysql.pysp,
  project: SysConfig.mysql.project,
};

module.exports = class DataBase {
  constructor(props) {

  }

  /**
   * @createtime 2019/08/20 16:45:57
   * @author 柯军 <arthaskj@163.com>
   * @param {string} sql 数据库查询语句
   * @desc 链接pysp数据库
   */
  async PYSP(sql) {
    return await this.ConnectDB(sql, 'pysp')
  }

  /**
   * @createtime 2019/08/20 16:45:57
   * @author 柯军 <arthaskj@163.com>
   * @param {string} sql 数据库查询语句
   * @desc 链接project数据库
   */
  async PROJ(sql) {
    return await this.ConnectDB(sql, 'project');
  }

  /**
   * @createtime 2019/08/20 16:46:38
   * @author 柯军 <arthaskj@163.com>
   * @param {string} sql 查询语句
   * @param {string} dbname 数据库配置key值，用于选择数据库配置
   * @desc 链接数据库具体实现
   */
  ConnectDB(sql, dbname) {
    return new Promise((success, error) => {
      let connection = mysql.createConnection(mysqlConfig[dbname]);

      connection.connect();

      connection.query(sql, (err, result) => {
        if (err) {
          // console.log(err, err.toString());
          // throw new Error(err.toString());
          error(err.toString())
          result = err.toString()
        }
        success(result);
      });

      connection.end();
    })
  }

}