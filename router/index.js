/*
 * @Author: 柯军
 * @Date: 2019-08-20 10:48:49
 * @Description: 接口路由中转
 */

const express = require('express');

const router = express.Router();
module.exports = router;

// 第一次请求后将类保存到map中，下次直接从map中拿接口数据      2019/10/12 16:20:10      --柯军
const ContronllersMap = new Map();

// TODO: 这里没有区分是post还是get请求方式，也就是说同一个请求两种方式都可以，将来试着使用ts解释器实现区分      2019/10/23 08:58:20      --柯军
// 抓取所有请求并进行分析路由      2019/08/20 19:59:50      --柯军
router.all('*', async(request, response) => {
  let url = request._parsedUrl.pathname;
  if (url !== '/favicon.ico') { // favicon.ico是页面title左侧的网站图标，会默认请求，因此清除第二次访问
    let urlArr = url.split('/'),
      ContronllerName = urlArr[1],
      actionName = urlArr[2],
      method = request.method;

    /**
     * @createtime 2019/08/20 17:37:42
     * @author 柯军 <arthaskj@163.com>
     * @param {string}
     * @desc 根据请求类型获取前端传递的参数
     */
    let setParams = (method, request) => {
      let val = null;
      // 根据GET或者POST来获取传输给后台的参数
      switch (method) {
        case 'GET':
          val = request.query;
          break;
        case 'POST':
          val = request.body;
          break;
        default:
          val = request.query;
          break;
      }
      return val;
    };

    // 根据路由去寻找Service，找不到或者出错就抛出异常      2019/08/20 19:59:25      --柯军
    try {
      let params = setParams(method, request),
        Contronller = null,
        contronllerClass = null;
      if (ContronllersMap.has(ContronllerName)) {
        contronllerClass = ContronllersMap.get(ContronllerName);
      } else {
        contronllerClass = require(`../Contronllers/${ContronllerName}`);
        if (contronllerClass) ContronllersMap.set(ContronllerName, contronllerClass);
      }

      Contronller = new contronllerClass({request, response});
      let result = await Contronller[actionName](params);
      response.status(200);
      // 为了通过微信公众号验证所作更改      2019/10/15 17:33:32      --柯军
      // response.json(result);
      response.send(result);
    } catch (error) {
      // 请求抛出错误并停止      2019/10/12 16:19:42      --柯军
      response.status(400);
      response.json(error.toString());
      throw new Error(error.toString()); // 抛出异常
    }
  }
})