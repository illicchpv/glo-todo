import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../Models/todo-item"

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 0,
      text: 'Первая задача',
      isDone: false,
    },
    {
      id: 1,
      text: 'Вторая задача',
      isDone: true,
    },
    {
      id: 2,
      text: 'Третья задача',
      isDone: true,
    },
  ])

  const createNewDoDo = (text: string) => {
    console.log('createNewDoDo text: ', text);

    const newId = todos.reduce((acc, el) => acc > el.id ? acc : el.id, 0) + 1
    // console.log('newId: ', newId);
    setTodos([...todos, {id: newId, text, isDone: false}])
  }

  return (
    <>
      <Header/>

      <Form createNewDoDo={createNewDoDo}/>

      <ToDoList todos={todos} />
    </>
  )
}