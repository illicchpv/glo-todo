import { Link, NavLink } from "react-router-dom";
import { ToDo } from "../../Models/todo-item";
import { StyledNavLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  // const href = `${isDev ? '' : ghRoot}/list/${todo.id}`
  const href = `/list/${todo.id}`
  console.log('href: ', href);

  return (
    <>
      {/* <StyledLink done={todo.done}
        target="_blank" rel="noreferrer"
        href={href}
      >{todo.id}. {todo.text}</StyledLink> */}

      <StyledNavLink done={todo.done? 'true' : 'false'} to={href}>{todo.text}</StyledNavLink>
    </>
  )
};
