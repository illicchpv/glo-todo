import { useEffect, useState } from "react";
import { ToDo } from "../Models/todo-item";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ComponentProps {
  todos: ToDo[];
}

export const ViewListItemPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<ToDo | null>(null)

  useEffect(() => {
    const searchToDo = todoList.find(el => el.id === Number(id))
    console.log('searchToDo: ', searchToDo);
    if (!searchToDo) {
      console.log(`Задача id:${id} не найдена!`)
      navigate('/404')
    } else {
      setTodo(searchToDo)
    }
  }, [todoList, id, navigate])

  if (!todo) return null
  const str = todo.text

  return (
    <>
      <Helmet>
        <title>{str} | ToDo List App</title>
      </Helmet>
      <div className="container">
        <div>
          <h2>text:[{todo?.text}]</h2>
          <h2>id:[{id}]</h2>
          <h2>isDone:[{todo?.isDone ? 'true' : 'false'}]</h2>
        </div>
      </div>
    </>);
};