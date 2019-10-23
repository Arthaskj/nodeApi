/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:42:49
 * @Description: 爬虫接口控制器
 */
const BaseContronller = require("../kjlib/BaseContronller");
const SpiderSvc = require("../Services/SpiderSvc");

module.exports = class SpiderContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new SpiderSvc();
  }

  // 获取读者文章
  GetArticle(params) {
    return this.svc.GetArticle(params);
  }

  // 获取新闻
  GetNews(params) {
    return this.svc.GetNews(params);
  }

  // 获取故事
  GetStory(params) {
    return this.svc.GetStory(params);
  }

}