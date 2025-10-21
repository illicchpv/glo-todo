import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../Models/todo-item"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { Helmet } from "react-helmet-async";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 0,
      text: 'Первая задача(изменить нельзя)',
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

  const notify = (s: string) => toast(s);
  const notifyErr = (s: string) => toast.error(s);

  const createNewDoDo = (text: string) => {
    console.log('createNewDoDo text: ', text);

    const newId = todos.reduce((acc, el) => acc > el.id ? acc : el.id, 0) + 1
    const toDoItem = { id: newId, text, isDone: false }
    setTodos([...todos, toDoItem])
    notifyErr(`Создана задача: "${toDoItem.text}"`)
  }

  const updateToDo = (toDoItem: ToDo) => {
    console.log('updateToDo', toDoItem);
    const newTodos: ToDo | undefined = todos.find(el => el.id === toDoItem.id)
    if (!newTodos || toDoItem.id === 0) {
      notifyErr(`Задача: "${toDoItem.text}" id:"${toDoItem.id}"  не найдена!`)
      return
    }
    newTodos.isDone = !newTodos.isDone
    setTodos([...todos])
    notify(`Задача: "${newTodos.text}" ${newTodos.isDone ? ('выполнена!').toUpperCase() : ('не выполнена!').toUpperCase()}`)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    console.log('deleteToDo', toDoItem);
    const newTodos = todos.filter(el => el.id !== toDoItem.id)
    setTodos(newTodos)
    notify(`Удалена задача: "${toDoItem.text}"`)
  }


  return (
    <>
      <Helmet>
        <title>Задачи | ToDo List App</title>
      </Helmet>   

      <Form createNewDoDo={createNewDoDo} />

      <ToDoList todos={todos}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}