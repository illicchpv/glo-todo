import { ToDo } from "../../Models/todo-item";
// import cl from "./ListItem.module.scss";
import { StyledLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (<>
    <StyledLink isDone={todo.isDone}
      target="_blank" rel="noreferrer"
      href={`/list/${todo.id}`}
    >{todo.id}. {todo.text}</StyledLink>
  </>
  )
  // className={`${cl.link} ${todo.isDone ? cl.done : ""}`}
};
