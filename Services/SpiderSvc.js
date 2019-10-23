/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:43:46
 * @Description: 爬虫接口实现
 */
const BaseSvc = require("../kjlib/BaseSvc")

module.exports = class SpiderSvc extends BaseSvc {

  constructor(props) {
    super(props);
  }

  /**
   * @createtime 2019/08/20 19:05:55
   * @author 柯军 <arthaskj@163.com>
   * @param {number} id 文章识别ID
   * @desc 获取读者文章
   */
  GetArticle(params) {
    let { id } = params, SQL;
    if (id) {
      SQL = `SELECT * 
              FROM Article 
              WHERE ID = ${id}`;
    } else {
      SQL = `SELECT * 
              FROM Article`;
    }

    return this._Context.DataBase.PYSP(SQL);
  }

  /**
   * @createtime 2019/08/20 19:05:55
   * @author 柯军 <arthaskj@163.com>
   * @param {number} id 识别ID
   * @desc 获取新闻
   */
  GetNews(params) {
    let { id } = params, SQL;

    if (id) {
      SQL = `SELECT * 
              FROM News 
              WHERE ID = ${id}`;
    } else {
      SQL = `SELECT * 
              FROM News`;
    }

    return this._Context.DataBase.PYSP(SQL);
  }

  /**
   * @createtime 2019/08/20 19:05:55
   * @author 柯军 <arthaskj@163.com>
   * @param {number} id 识别ID
   * @desc 获取故事
   */
  GetStory(params) {
    let { id } = params, SQL;

    if (id) {
      SQL = `SELECT * 
              FROM Story 
              WHERE ID = ${id}`;
    } else {
      SQL = `SELECT * 
              FROM Story`;
    }

    return this._Context.DataBase.PYSP(SQL);
  }
};