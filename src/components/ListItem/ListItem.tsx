import { ToDo } from "../../Models/todo-item";
import { StyledNavLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  const href = `/list/${todo.id}`

  return (
    <StyledNavLink done={todo.done ? 'true' : 'false'} to={href}>
      🔗"{todo.text}"
    </StyledNavLink>
  )
};
