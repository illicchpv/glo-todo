import { ToDo } from "../../Models/todo-item";
import cl from "./ListItem.module.scss";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <a
      className={`${cl.link} ${todo.isDone ? cl.done : ""}`}
      href={`/list/${todo.id}`}
    > {todo.id}. {todo.text}</a>
  )
};
