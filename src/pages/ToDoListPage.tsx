// import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../Models/todo-item"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { createAction, deleteAction, updateAction } from "../features/todoList"

export const ToDoListPage = () => {
  // const [todos, setTodos] = useState<ToDo[]>([
  //   {
  //     id: 0,
  //     text: 'Первая задача(изменить нельзя)',
  //     isDone: false,
  //   },
  //   {
  //     id: 1,
  //     text: 'Вторая задача',
  //     isDone: true,
  //   },
  //   {
  //     id: 2,
  //     text: 'Третья задача',
  //     isDone: true,
  //   },
  // ])

  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()
  
  const notify = (s: string) => toast(s);
  const notifyErr = (s: string) => toast.error(s);

  const createNewDoDo = (text: string) => {
    dispatch(createAction(text))

    // notifyErr(`Создана задача: "${toDoItem.text}"`)
  }

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem))

    // const newTodos: ToDo | undefined = todos.find(el => el.id === toDoItem.id)
    // if (!newTodos || toDoItem.id === 0) {
    //   notifyErr(`Задача: "${toDoItem.text}" id:"${toDoItem.id}"  не найдена!`)
    //   return
    // }
    // newTodos.isDone = !newTodos.isDone
    // setTodos([...todos])
    // notify(`Задача: "${newTodos.text}" ${newTodos.isDone ? ('выполнена!').toUpperCase() : ('не выполнена!').toUpperCase()}`)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem))

    // console.log('deleteToDo', toDoItem);
    // const newTodos = todos.filter(el => el.id !== toDoItem.id)
    // setTodos(newTodos)
    // notify(`Удалена задача: "${toDoItem.text}"`)
  }


  return (
    <>
      <Helmet>
        <title>Задачи | ToDo List App</title>
      </Helmet>   

      <Form createNewDoDo={createNewDoDo} />

      <ToDoList todos={todoList}
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