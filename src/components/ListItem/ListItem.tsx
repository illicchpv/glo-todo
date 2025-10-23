import { ToDo } from "../../Models/todo-item";
import { StyledLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (<>
    <StyledLink isDone={todo.isDone}
      target="_blank" rel="noreferrer"
      href={`/list/${todo.id}`}
    >{todo.id}. {todo.text}</StyledLink>
  </>
  )
};
