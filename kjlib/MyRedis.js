const redis = require('redis');
const util = require('util');
const config = require('../SysConfig')
const redisConfig = config.redis;

module.exports = class MyRedis {
  constructor(props) {
    this.createRedis();
  }

  setString(key, value, cb) {
    this.client.set(key, value, cb)
  }
  getString(key, value, cb) {
    this.client.set(key, value, cb)
  }

  setObject(key, value, cb) {
    this.client.hset(key, value, cb)
  }
  getObject(key, value, cb) {
    this.client.hget(key, value, cb)
  }
  getAllObject(key, value, cb) {
    this.client.hgetall(key, cb)
  }

  setList(key, value, cb) {
    this.client.set(key, value, cb)
  }
  getList(key, value, cb) {
    this.client.set(key, value, cb)
  }

  createRedis() {
    this.client = redis.createClient(redisConfig.port, redisConfig.path);
  }
}