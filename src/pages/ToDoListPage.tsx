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
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()

  const getItemById = (id: string) => todoList.find(el => el.id === id)
  const notify = (s: string) => toast(s);
  const notifyErr = (s: string) => toast.error(s);

  const createNewDoDo = (text: string) => {
    try {
      dispatch(createAction(text))
      notify(`задача: "${text}" создана `)
      return true
    } catch (error: any) {
      console.log('createNewDoDo error: ', error.message);
      notifyErr(error.message)
    }
  }

  const updateToDo = (toDoItem: ToDo) => {
    try {
      dispatch(updateAction(toDoItem))
      toDoItem = getItemById(toDoItem.id) as ToDo
      notify(`Задача: "${toDoItem.text}" ${!toDoItem.isDone ? ('выполнена!').toUpperCase() : ('не выполнена!').toUpperCase()}`)
    } catch (error: any) {
      console.log('updateToDo error: ', error.message);
      notifyErr(error.message)
    }
  }

  const deleteToDo = (toDoItem: ToDo) => {
    try {
      dispatch(deleteAction(toDoItem))
      notify(`Задача: "${toDoItem.text}" удалена`)
    } catch (error: any) {
      console.log('deleteToDo error: ', error.message);
      notifyErr(error.message)
    }
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