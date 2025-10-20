import "./ToDoList.scss";
import { ToDo } from "../../Models/todo-item";

import { ToDoListItem } from "./ToDoListItem/ToDoListItem";



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
  const todos = props.todos

  const checkedList = () => {
    return todos.filter((el, i) => el.isDone).map(el => <ToDoListItem key={el.id} toDoItem={el}
      updateToDo={props.updateToDo}
      deleteToDo={props.deleteToDo}
    />)
  }

  const unCheckedList = () => {
    return todos.filter((el, i) => !el.isDone).map(el => <ToDoListItem key={el.id} toDoItem={el}
      updateToDo={props.updateToDo}
      deleteToDo={props.deleteToDo}
    />)
  }

  return (
    <div className="todo-container">

      <ul className="todo-list completed">
        {unCheckedList()}
      </ul>

      <hr />

      <ul className="todo-list failed">
        {checkedList()}
      </ul>

    </div>
  );
}
