/*
 * @Author: 柯军
 * @Date: 2019-08-20 17:42:49
 * @Description: 待办事项控制器
 */
const BaseContronller = require("../kjlib/BaseContronller");
const ToDoListSvc = require("../Services/ToDoListSvc");

module.exports = class ToDoListContronller extends BaseContronller {

  constructor(props) {
    super(props);
    this.svc = new ToDoListSvc();
  }

  // 根据用户获取所有待做项
  GetTodoList(params) {
    return this.svc.GetTodoList(params);
  }

  // 保存待办事项
  SaveTodoList(params) {
    return this.svc.SaveTodoList(params);
  }

  // 批量设置待做状态
  SetTodosStatus(params) {
    return this.svc.SetTodosStatus(params);
  }

  // 单个设置待做状态
  SetTodoStatus(params) {
    return this.svc.SetTodoStatus(params);
  }

  // 删除待办事项
  DeleteTodo(params) {
    return this.svc.DeleteTodo(params);
  }

}