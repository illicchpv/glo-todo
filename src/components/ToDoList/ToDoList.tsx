import "./ToDoList.scss";
import { ToDo } from "../../Models/todo-item";

import { ToDoListItem } from "./ToDoListItem/ToDoListItem";



export const ToDoList = (props: {todos: ToDo[]}) => {
  const todos = props.todos

  const checkedList = () => {
    return todos.filter((el, i) => el.isDone).map(el => <ToDoListItem key={el.id} toDoItem={el} />)
  }
  const unCheckedList = () => {
    return todos.filter((el, i) => !el.isDone).map(el => <ToDoListItem key={el.id} toDoItem={el} />)
  }

  return (
    <div className="todo-container">

      <ul className="todo-list completed">
        {unCheckedList()}
      </ul>
      
      <ul className="todo-list failed">
        {checkedList()}
      </ul>

    </div>
  );
}
