import { ToDo } from "../../Models/todo-item";

import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from "./ToDoList.styled";



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
    <ToDoListContainer>

      <ToDoListFailed>
        {unCheckedList()}
      </ToDoListFailed>

      <hr />

      <ToDoListCompleted>
        {checkedList()}
      </ToDoListCompleted>

    </ToDoListContainer>
  );
}
