import { Link, NavLink } from "react-router-dom";
import { ToDo } from "../../Models/todo-item";
import { StyledLink, StyledNavLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  // const href = `${isDev ? '' : ghRoot}/list/${todo.id}`
  const href = `/list/${todo.id}`
  console.log('href: ', href);

  return (
    <>
      {/* <StyledLink isDone={todo.isDone}
        target="_blank" rel="noreferrer"
        href={href}
      >{todo.id}. {todo.text}</StyledLink> */}

      <StyledNavLink isDone={todo.isDone} to={href}>{todo.id}. {todo.text}</StyledNavLink>
    </>
  )
};
