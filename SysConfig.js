/**
 * @Author: 柯军
 * @Date: 2019/09/11 18:49:44
 * @Description: 系统配置项目
 */
module.exports = {
  httpsPort: 4380, // 自定义数字端口，给https用的端口
  httpPort: 3000, // 自定义数字端口，给http用的端口

  // email发送方配置
  email: {
    service: 'QQ',
    user: '****@qq.com',
    password: '****', // 授权码，不是邮箱密码
  },

  // 数据库配置
  mysql: {
    pysp: {
      host: '127.0.0.1',
      user: 'py',
      password: '****',
      database: 'databasename',
      port: '3306'
    },
    project: {
      host: '127.0.0.1',
      user: 'arthas',
      password: '****',
      database: 'databasename',
      port: '3306'
    }
  },

  // 微信公众号配置
  wechat: {
    appId: '****',
    appSecret: '****',
    token: '****',
    encodingAESKey: '****'
  },

  // 微信小程序配置
  wechatP: {
    appId: '****',
    secret: '****',
    grant_type: '****'
  },

  // redis配置
  redis: {
    port: 6379,
    path: '127.0.0.1'
  }
}