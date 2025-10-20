import { ToDo } from "../../../Models/todo-item";
import "./ToDoListItem.scss";

export const ToDoListItem = (props: {toDoItem: ToDo}) => {
  console.log('props: ', props);

  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"></button>
        <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}></button>
      </div>
    </li>
  );
}
