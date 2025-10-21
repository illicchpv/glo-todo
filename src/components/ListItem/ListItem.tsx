import { NavLink } from "react-router-dom";
import { ToDo } from "../../Models/todo-item";
import cl from "./ListItem.module.scss";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <NavLink
      className={`${cl.link} ${todo.isDone ? cl.done : ""}`}
      to={`/list/${todo.id}`}
    > {todo.id}. {todo.text}</NavLink>
  )
  //       target="_black"

};
