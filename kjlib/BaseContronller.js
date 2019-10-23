/*
 * @Author: 柯军
 * @Date: 2019-08-20 10:38:17
 * @Description:
 */

module.exports = class BaseContronller {

  constructor(props) {
    this.request = props.request;
    this.response = props.response;
    this.requestDto = {request: this.request, response: this.response};
    props.response.status(200);
  }


}