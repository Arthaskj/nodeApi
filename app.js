/* eslint-disable no-extend-native */
/*
 * @Author: Ke Jun
 * @Date: 2018-12-21 09:00:36
 * @LastEditTime: 2019-08-20 17:41:10
 * @Description: 项目启动文件
 */
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let https = require('https');
let fs = require('fs');
const config = require('./SysConfig');
const {httpsPort, httpPort} = config

let cors = require('cors');

app.use(cors());

// 设置跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // 这个表示任意域名都可以访问，这样写不能携带cookie了。
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS'); // 设置方法
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
  // if (req.method == 'OPTIONS') {
  //   res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
  // }
  // else {
  //   next();
  // }
});

// post方法必须要这段
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api/', require('./router/index.js'));

// post用req.body获取数据
// get用req.query获取数据

// 配置服务端口
// 1、创建https服务器
// 这里放置自己得相关https用到得ssl证书
let privateKey = fs.readFileSync('./Nginx/2_arthaskj.cn.key', 'utf8');
let certificate = fs.readFileSync('./Nginx/1_arthaskj.cn_bundle.crt', 'utf8');
let credentials = {
  key: privateKey,
  cert: certificate
};
let httpsServer = https.createServer(credentials, app);
httpsServer.listen(httpsPort);

let server = app.listen(httpPort || 3000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});